// --- main controller module --- //
function mainControllerModule(app){

    function mainController(){

        const vm = this;

        //photos for directive
        vm.photos = [
            {
                PhotoTitle:"First",
                PhotoUrl:"https://static.pexels.com/photos/87293/pexels-photo-87293.jpeg"
            },
            {
                PhotoTitle:"Second",
                PhotoUrl:"https://static.pexels.com/photos/119720/pexels-photo-119720.jpeg"
            },
            {
                PhotoTitle:"Third",
                PhotoUrl:"https://static.pexels.com/photos/234881/pexels-photo-234881.jpeg"
            }
        ];
    }

    app.controller("MainCtrl",mainController);

}

module.exports = mainControllerModule;