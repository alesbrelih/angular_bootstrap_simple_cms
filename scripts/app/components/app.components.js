function allComponentsModule(app){

    //register cms-tool component
    const cmsTool = require("./cms-tool/cms.tool.component");
    cmsTool(app);
    

}

module.exports = allComponentsModule;