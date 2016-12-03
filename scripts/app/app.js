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

    //register directives
    const directives = require("./directives/app.directives");
    directives(app);

    //register services
    const services = require("./services/app.services");
    services(app);


})();