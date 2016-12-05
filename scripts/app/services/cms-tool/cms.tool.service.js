// --- CMS TOOL SERVICE MODULE --- //
function cmsToolServiceModule(app){

    //cms tool controller
    function cmsToolController(){

        // --- PRIVATES --- //
        let props = null;

        // private function that inserts substring to a string
        function insert(element){

            //private helper functions
            function insertElement(open,close){

                if(props.content.length === 0 || (props.selected.start === props.content.length && props.selected.end === props.content.length)){
                    props.content = props.content +open+close;

                    //set selected index at end of content
                    const contentLength = props.content.length;
                    props.selected.start = contentLength;
                    props.selected.end = contentLength;

                }
                else if(props.selected.start == props.selected.end){
                    props.content = props.content.substring(0,props.selected.end)+open+close+props.content.substring(props.selected.end,props.content.length);

                    //set new index
                    const newIndex = props.selected.start + open.length;

                    props.selected.start = newIndex;
                    props.selected.end = newIndex;

                }
                else{
                    //props.content = props.content.substring(0,props.selected.end)+close+props.content.substring(props.selected.end,props.content.length);
                    props.content = props.content.substring(0,props.selected.start)+open+close+props.content.substring(props.selected.end,props.content.length);

                    const selectionEnd = props.selected.start+(open.length+close.length);
                    props.selected.end = selectionEnd;

                }
                props.lastElement=open+close;
                props.elementsAdded++;

            }

            //inserts element with no closing tag
            function insertSingle(el){


                if(props.content.length === 0 || (props.selected.start === props.content.length && props.selected.end === props.content.length)){
                    props.content = props.content +el;

                    console.log(props.content);
                    //set selected index at end of content
                    const contentLength = props.content.length;
                    props.selected.start = contentLength;
                    props.selected.end = contentLength;
                }
                else{

                    props.content = props.content.substring(0,props.selected.start)+el+props.content.substring(props.selected.end,props.content.length);

                    const newIndex = props.selected.start+el.length;
                    props.selected.start = newIndex;
                    props.selected.end = newIndex;

                }
                props.lastElement = el;
                props.elementsAdded++;
                //TODO: INSERT TOASTR TO SAY THAT IT WILL BE INSERTED AT START
            }

            //inserts font styling
            function insertStyle(open,close){



                //insert at end
                if(props.content.length === 0 || (props.selected.start === props.content.length && props.selected.end === props.content.length)){
                    props.content = props.content +open+close;

                    //set selected index at end of content
                    const contentLength = props.content.length;
                    props.selected.start = contentLength;
                    props.selected.end = contentLength;
                }
                else if(props.selected.start == props.selected.end){
                    props.content = props.content.substring(0,props.selected.end)+open+close+props.content.substring(props.selected.end,props.content.length);

                    //set new index
                    const newIndex = props.selected.start+open.length;
                    props.selected.start = newIndex;
                    props.selected.end = newIndex;
                }
                else{
                    props.content = props.content.substring(0,props.selected.end)+close+props.content.substring(props.selected.end,props.content.length);
                    props.content = props.content.substring(0,props.selected.start)+open+props.content.substring(props.selected.start,props.content.length);

                    //start stays same
                    const selectionEnd = props.selected.end+(open.length+close.length);
                    props.selected.end = selectionEnd;

                }

                //set change
                props.lastElement=open+close;
                props.elementsAdded++;

            }

            //inserts container
            function insertContainer(type){

                switch (type){
                case "row":
                    insertElement("<div class='row'>","</div>");
                    break;
                case "half-column":
                    insertElement("<div class='col-md-6'>","</div>");
                    break;
                case "third-column":
                    insertElement("<div class='col-md-4'>","</div>");
                    break;
                case "paragraph":
                    insertElement("<p>","</p>");
                    break;
                }

            }

            //switch function to insert element depending on stuff
            switch(element){
            case "line":
                insertSingle("<br>");
                break;
            case "paragraph":
                insertContainer("paragraph");
                break;
            case "strong":
                insertStyle("<strong>","</strong>");
                break;
            case "italic":
                insertStyle("<i>","</i>");
                break;
            case "horizontal-line":
                insertSingle("<hr>");
                break;
            case "heading-1":
                insertStyle("<h1>","</h1>");
                break;
            case "heading-2":
                insertStyle("<h2>","</h2>");
                break;
            case "heading-3":
                insertStyle("<h3>","</h3>");
                break;
            case "row":
                insertContainer("row");
                break;
            case "half-column":
                insertContainer("half-column");
                break;
            case "third-column":
                insertContainer("third-column");
                break;

            }


        }

        //inserts photo
        function insertPhoto(imgUrl){
            if(imgUrl){ //url needs to exist

                const photo = "<img class='img-responsive' src='"+imgUrl+"'></img>";

                if(props.content.length === 0 || (props.selected.start === props.content.length && props.selected.end === props.content.length)){
                    props.content = props.content +photo;

                    //set selected index at end of content
                    const contentLength = props.content.length;
                    props.selected.start = contentLength;
                    props.selected.end = contentLength;

                }
                else if(props.selected.start == props.selected.end){
                    props.content = props.content.substring(0,props.selected.end)+photo+props.content.substring(props.selected.end,props.content.length);

                    //set new index
                    const newIndex = props.selected.start + photo.length;

                    props.selected.start = newIndex;
                    props.selected.end = newIndex;

                }
                else{
                    //props.content = props.content.substring(0,props.selected.end)+close+props.content.substring(props.selected.end,props.content.length);
                    props.content = props.content.substring(0,props.selected.start)+photo+props.content.substring(props.selected.end,props.content.length);

                    const selectionEnd = props.selected.start+(photo.length);
                    props.selected.end = selectionEnd;

                }
                props.lastElement=open+close;
                props.elementsAdded++;
            }
        }



        // ---- PUBLICS ---- //

        //returned factory
        const cmsFactory = {};


        //set content variable
        cmsFactory.SetContent = contentVar => {
            props = contentVar;
        };

        // object for tools
        cmsFactory.Tools = {};


        // insert element
        cmsFactory.Tools.Insert = element => {
            if(element){
                insert(element);
            }
        };

        //inserts photo
        cmsFactory.Tools.InsertPhoto = imgUrl => {
            if(imgUrl){
                insertPhoto(imgUrl);
            }

        };

        //gets cmstool service props
        cmsFactory.GetProps = ()=>{
            return props;
        };

        //returns content with no linebreaks
        cmsFactory.GetContent = ()=>{

            //return content with no linebreaks;

            let noLineBreaks = props.content;
            while(noLineBreaks.indexOf("\n") != -1){
                noLineBreaks = noLineBreaks.replace("\n","");

            }

            return noLineBreaks;
        };

        //return factory
        return cmsFactory;

    }

    //register factory
    app.factory("CmsService",cmsToolController);
}

//export module
module.exports = cmsToolServiceModule;