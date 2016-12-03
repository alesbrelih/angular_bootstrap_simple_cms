// --- CMS TOOL SERVICE MODULE --- //
function cmsToolServiceModule(app){

    //cms tool controller
    function cmsToolController(){

        // --- PRIVATES --- //
        let props = null;
        let photos = null;

        // private function that inserts substring to a string
        function insert(element){

            //private helper functions
            function insertElement(open,close){

                if(props.selected.start == 0 && props.selected.end==0){
                    props.content = props.content + "\n"+open+close+"\n";
                }
                else if(props.selected.start == props.selected.end){
                    props.content = props.content.substring(0,props.selected.end)+"\n"+open+close+"\n"+props.content.substring(props.selected.end,props.content.length);
                }
                else{
                    props.content = props.content.substring(0,props.selected.end)+"\n"+close+"\n"+props.content.substring(props.selected.end,props.content.length);
                    props.content = props.content.substring(0,props.selected.start)+"\n"+open+"\n"+props.content.substring(props.selected.start,props.content.length);

                }
            }

            //inserts element with no closing tag
            function insertSingle(el){
                if(props.selected.start == 0 && props.selected.end==0){
                    props.content = props.content + "\n"+el+ "\n";
                }
                else{
                    props.content = props.content.substring(0,props.selected.start)+"\n"+el+"\n"+props.content.substring(props.selected.start,props.content.length);

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
            case "line":
                insertSingle("<br>");
                break;
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
                insertSingle("<hr>");
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

        //inserts photo
        function insertPhoto(imgUrl){
            if(imgUrl){ //url needs to exist

                const photo = "<img class='img-responsive' src='"+imgUrl+"'></img>";

                if(props.selected.start == 0 && props.selected.end==0){
                    props.content = props.content +"\n"+ photo+"\n";
                }
                else{
                    props.content = props.content.substring(0,props.selected.start)+"\n"+photo+"\n"+props.content.substring(props.selected.start,props.content.length);

                }
            }
        }



        // ---- PUBLICS ---- //

        //returned factory
        const cmsFactory = {};


        //set content variable
        cmsFactory.SetContent = contentVar => {
            props = contentVar;
        };

        //set photos reference
        cmsFactory.SetPhotos = photosRef => {
            photos = photosRef;
        };

        // object for tools
        cmsFactory.Tools = {};


        // insert element
        cmsFactory.Tools.Insert = element => {
            if(element){
                insert(element);
            }
        };

        cmsFactory.Tools.InsertPhoto = imgUrl => {
            if(imgUrl){
                insertPhoto(imgUrl);
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