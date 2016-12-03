// ---- REGISTERS ALL DIRECTIVES MODULE --- //
function registerAllDirectivesModule(app){

    //register ab-selected-text DIRECTIVES
    const abSelectedText = require("./attributes/ab.selected.text.directive");
    abSelectedText(app);

}

module.exports = registerAllDirectivesModule;