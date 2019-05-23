'use strict';

let array  = [0,1,2,3,4,5];

function sumRect (array) {
    let result = 0;

    for (let index = 0; index < array.length; index++) {
        result = result + Math.pow(array[index], 2);
        console.log(result);
    }
}

sumRect(array);





