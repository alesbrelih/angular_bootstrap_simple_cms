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

                if(props.selected.start == 0 && props.selected.end==0){
                    props.content = props.content + open+close;
                }
                else if(props.selected.start == props.selected.end){
                    props.content = props.content.substring(0,props.selected.end)+open+close+props.content.substring(props.selected.end,props.content.length);
                }
                else{
                    props.content = props.content.substring(0,props.selected.end)+close+props.content.substring(props.selected.end,props.content.length);
                    props.content = props.content.substring(0,props.selected.start)+open+props.content.substring(props.selected.start,props.content.length);

                }
            }

            //inserts element with no closing tag
            function insertSingle(el){
                if(props.selected.start == 0 && props.selected.end==0){
                    props.content = props.content + el;
                }
                else{
                    props.content = props.content.substring(0,props.selected.start)+el+props.content.substring(props.selected.start,props.content.length);

                }
                //TODO: INSERT TOASTR TO SAY THAT IT WILL BE INSERTED AT START
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
                }
            }

            //switch function to insert element depending on stuff
            switch(element){
            case "paragraph":
                insertElement("<p>","</p>");
                break;
            case "strong":
                insertElement("<strong>","</strong>");
                break;
            case "italic":
                insertElement("<i>","</i>");
                break;
            case "horizontal-line":
                insertSingle("</hr>");
                break;
            case "heading-1":
                insertElement("<h1>","</h1>");
                break;
            case "heading-2":
                insertElement("<h2>","</h2>");
                break;
            case "heading-3":
                insertElement("<h3>","</h3>");
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



        //return factory
        return cmsFactory;

    }

    //register factory
    app.factory("CmsService",cmsToolController);
}

//export module
module.exports = cmsToolServiceModule;