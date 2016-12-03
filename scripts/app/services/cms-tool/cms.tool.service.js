// --- CMS TOOL SERVICE MODULE --- //
function cmsToolServiceModule(app){

    //cms tool controller
    function cmsToolController(){

        //returned factory
        const cmsFactory = {};

        // object for tools
        cmsFactory.Tools = {};

        // --- SUPORTS TEXT SELECTION --- //
        // insert paragraph

        cmsFactory.Tools.InsertParagraph = (selection)=>{
            //no current selection
            if(selection === null){

            }

            //with current selection
        };



        //return factory
        return cmsFactory;

    }

    //register factory
    app.factory("CmsService",cmsToolController);
}

//export module
module.exports = cmsToolServiceModule;