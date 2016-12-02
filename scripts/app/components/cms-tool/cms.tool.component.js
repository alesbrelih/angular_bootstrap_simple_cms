
// ------- CMS TOOL COMPONENT MODULE -------- //

function cmsToolComponentModule(app){

    //cms tool controller
    function cmsToolController($sce,$scope){
        const vm = this;

        // --- PROPERTIES --- //

        //text area content
        vm.content = "";

        //displayed html
        vm.safe = "";

        //show preview
        vm.showPreview = false;


        // --- WATCH --- //

        //watch and set
        $scope.$watch("vm.content",function(){
            vm.safe =  $sce.trustAsHtml(vm.content);
        });


    }

    cmsToolController.$inject = ["$sce","$scope"];

    //register component on app
    app.component("abCmsTool",{
        controller: cmsToolController,
        controllerAs:"vm",
        templateUrl:"/templates/components/cms-tool/cms.tool.component.html"
    });

}


module.exports = cmsToolComponentModule;