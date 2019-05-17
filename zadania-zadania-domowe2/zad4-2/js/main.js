'use strict';
function sortLetter(string){
    string = string.split('');
    string = string.sort();
    string = string.join('');
    console.log(string);
    return string;
}

sortLetter('Akademia108');