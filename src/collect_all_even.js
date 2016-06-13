 'use strict';

function collect_all_even(collection) {
    var arr_even = [];
    for(var i = 0; i < collection.length; i++){
        if(collection[i] % 2 == 0){
            arr_even.push(collection[i]);
        }
    }

    return arr_even;
}

module.exports = collect_all_even;
