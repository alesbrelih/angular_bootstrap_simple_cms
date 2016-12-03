
// --- STARTS WITH FILTER MODULE ---- //

function startsWithFilterModule(app){


     //filter controller
    function startsWithFilter() {

        //gets input (array) and starting index
        return function(input, startingIndex) {

            if (input != null) {
                //gets array and returns it sliced from starting index
                return input.slice(startingIndex);
            }
        };
    }

    //register filter
    app.filter("startsWith", startsWithFilter);

}

module.exports = startsWithFilterModule;