function abSelectedTextDirectiveModule(app){

    // directive controller
    function abSelectedTextDirectiveController(CmsService){

        //link fnc
        function linkFnc(scope,el){
            scope.CmsService = CmsService.GetProps();

            //init set selected text values
            scope.abSelectedText = {
                selection:"",
                start:0,
                end:0
            };

            el.on("mouseup",function(e){
                //left mouse button
                if(e.which === 1){

                    //using math.max because i want start always the smaller index

                    //selection start index
                    const selectionStart = Math.min(el[0].selectionStart,el[0].selectionEnd);
                    //selection end index
                    const selectionEnd = Math.max(el[0].selectionEnd,el[0].selectionStart);

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

            scope.$watch("CmsService.elementsAdded",function(){
                el[0].focus();

                //if nothing was selected
                if(scope.CmsService.selected.start == 0 && scope.CmsService.selected.end == 0){
                    el[0].selectionStart = el[0].value.length;
                    el[0].selectionEnd = el[0].value.length;
                }
                //bigger selection
                else if(scope.CmsService.selected.start != scope.CmsService.selected.end){

                    let newStart = scope.CmsService.selected.start;
                    // +3 because of new line signs
                    let newEnd = scope.CmsService.selected.end + scope.CmsService.lastElement.length + 3;

                    //text area selection
                    el[0].selectionStart = newStart;
                    el[0].selectionEnd = newEnd;

                    //Set cms service props
                    scope.CmsService.selected.start = newStart;
                    scope.CmsService.selected.end = newEnd;


                }
                else{
                    el[0].selectionStart = scope.CmsService.selected.start;
                    el[0].selectionEnd = scope.CmsService.selected.end;
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
    abSelectedTextDirectiveController.$inject = ["CmsService"];

    //register directive
    app.directive("abSelectedText",abSelectedTextDirectiveController);
}

//export module
module.exports = abSelectedTextDirectiveModule;