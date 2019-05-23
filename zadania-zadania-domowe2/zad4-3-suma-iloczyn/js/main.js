'use strict';

function sumArray(table) {
    let sum = 0;
    let iloczyn = 1;

    table.forEach(element => {
        sum = sum + element;
        iloczyn = iloczyn * element;
    }); 

    console.log(sum);
    console.log(iloczyn);
}

let array = [1, 2, 3, 4, 5, 6];

sumArray(array);