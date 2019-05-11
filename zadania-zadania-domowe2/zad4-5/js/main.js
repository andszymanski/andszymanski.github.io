'use strict';
function fibbonachi(element) {
    let elements = [1,1];

    for(let i = 2; i < element; i++ ){
        let fibbonachiElement = elements[i - 1] + elements[i - 2];
        elements.push(fibbonachiElement);
        console.log(elements);
    }
}

fibbonachi(20);
