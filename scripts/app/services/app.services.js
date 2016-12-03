// --- REGISTER ALL SERVICES MODULE --- //
function registerAllServicesModule(app){

    // cms tool service
    const cmsToolService = require("./cms-tool/cms.tool.service");
    cmsToolService(app);

}

//export module
module.exports = registerAllServicesModule;