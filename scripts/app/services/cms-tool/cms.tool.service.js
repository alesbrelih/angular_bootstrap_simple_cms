// --- CMS TOOL SERVICE MODULE --- //
function cmsToolServiceModule(app){

    //cms tool controller
    function cmsToolController(){

        //returned factory
        const cmsFactory = {};

        // object for tools
        cmsFactory.Tools = {};

        //return factory
        return cmsFactory;

    }

    //register factory
    app.factory("CmsService",cmsToolController);
}

//export module
module.exports = cmsToolServiceModule;