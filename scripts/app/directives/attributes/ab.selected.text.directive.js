function abSelectedTextDirectiveModule(app){

    // directive controller
    function abSelectedTextDirectiveController(){

        //link fnc
        function linkFnc(scope,el){

            //init set selected text values
            scope.abSelectedText = {
                selection:"",
                start:0,
                end:0
            };

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
                    scope.abSelectedText.selection = selection;
                    scope.abSelectedText.start = selectionStart;
                    scope.abSelectedText.end = selectionEnd;
                }

            });
            //if user types then selection follows
            el.on("keyup",function(){

                scope.abSelectedText.start = el[0].selectionStart;
                scope.abSelectedText.end = el[0].selectionEnd;
                scope.abSelectedText.selection = "";
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