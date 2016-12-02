(function(){

    // required modules
    const angular = require("angular");
    const $ = window.jQuery = require("jquery");
    require("../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min");

    //register main app
    const app = angular.module("cmsApp",[]);

    //register components
    const components = require("./components/app.components");
    components(app);
    


})();