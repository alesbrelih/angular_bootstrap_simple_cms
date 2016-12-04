
// ------- CMS TOOL COMPONENT MODULE -------- //

function cmsToolComponentModule(app){

    //cms tool controller
    function cmsToolController($sce,$scope,CmsService){
        const vm = this;

        // --- PROPERTIES --- //

        vm.props = {
            content:"",
            selected:null,
            lastElement:"",
            elementsAdded:0
        };





        //set content for cms service
        CmsService.SetContent(vm.props);


        // set photos list reference
        //CmsService.SetPhotos(vm.photos);


        //displayed html
        vm.safe = "";

        //show preview
        vm.showPreview = false;

        vm.utilities = [
            {
                classes:"btn btn-primary",
                text:"new line",
                type:"line"
            },
            {
                classes:"btn btn-primary",
                text:"new paragraph",
                type:"paragraph"
            },
            {
                classes:"btn btn-primary",
                text:"bold",
                type:"strong"
            },
            {
                classes:"btn btn-primary",
                text:"italic",
                type:"italic"
            },
            {
                classes:"btn btn-primary",
                text:"H1",
                type:"heading-1"
            },
            {
                classes:"btn btn-primary",
                text:"H2",
                type:"heading-2"
            },
            {
                classes:"btn btn-primary",
                text:"H3",
                type:"heading-3"
            },
            {
                classes:"btn btn-primary",
                text:"h - line",
                type:"horizontal-line"
            },
            {
                classes:"btn btn-primary",
                text:"photo",
                type:"insert-photo"
            },
            {
                classes:"btn btn-primary",
                text:"row",
                type:"row"
            },
            {
                classes:"btn btn-primary",
                text:"1/2 column",
                type:"half-column"
            },
            {
                classes:"btn btn-primary",
                text:"1/3 column",
                type:"third-column"
            },


        ];

        vm.test = ()=>{
            CmsService.GetContent();
        };

        //inserts element
        vm.addElement=(type)=>{
            if(type == "insert-photo"){
                vm.selectPhoto = !vm.selectPhoto;
            }
            CmsService.Tools.Insert(type);
        };

        //inserts photo
        vm.addPhoto = photoUrl =>{
            CmsService.Tools.InsertPhoto(photoUrl);
            vm.selectPhoto = false;
        };



        // --- WATCH --- //

        //watch and set
        $scope.$watch("vm.props.content",function(){
            vm.safe =  $sce.trustAsHtml(vm.props.content);
        });


    }

    cmsToolController.$inject = ["$sce","$scope","CmsService"];

    //register component on app
    app.component("abCmsTool",{
        controller: cmsToolController,
        controllerAs:"vm",
        templateUrl:"/templates/components/cms-tool/cms.tool.component.html",
        bindings:{
            photos:"="
        }
    });

}


module.exports = cmsToolComponentModule;