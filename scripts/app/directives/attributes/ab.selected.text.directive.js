function abSelectedTextDirectiveModule(app){

    // directive controller
    function abSelectedTextDirectiveController(){

        //link fnc
        function linkFnc(scope,el){

            el.on("mouseup",function(e){
                //left mouse button
                if(e.which === 1){

                    //selection start index
                    const selectionStart = el[0].selectionStart;
                    //selection end index
                    const selectionEnd = el[0].selectionEnd;

                    //selected text
                    const selection = el[0].value.substring(selectionStart,selectionEnd);

                    //set scope var
                    scope.abSelectedText = selection;
                }

            });
        }

        //returned def for directive
        return{
            restrict:"A",
            link:linkFnc,
            scope:{
                abSelectedText:"=" //var that selected text will be assigned to
            }

        };
    }

    //register directive
    app.directive("abSelectedText",abSelectedTextDirectiveController);
}

//export module
module.exports = abSelectedTextDirectiveModule;