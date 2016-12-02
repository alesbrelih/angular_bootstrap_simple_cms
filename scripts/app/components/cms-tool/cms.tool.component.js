
// ------- CMS TOOL COMPONENT MODULE -------- //

function cmsToolComponentModule(app){

    //cms tool controller
    function cmsToolController(){
        const vm = this;


    }

    //register component on app
    app.component("abCmsTool",{
        controller: cmsToolController,
        controllerAs:"vm",
        templateUrl:"/templates/components/cms-tool/cms.tool.component.html"
    });

}


module.exports = cmsToolComponentModule;