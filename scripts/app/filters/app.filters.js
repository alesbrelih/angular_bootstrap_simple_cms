// --- REGISTER ALL FILTERS MODULE --- //
function registerAllFiltersModule(app){

    //register startswith filter
    const startsWith = require("./ng-repeat/starts.with.filter");
    startsWith(app);

}

//export module
module.exports = registerAllFiltersModule;