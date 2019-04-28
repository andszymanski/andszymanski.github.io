"use strict";

var pierwszyDiv = document.getElementById("parFirst");
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);


console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.childNodes[1]);
console.log(pierwszyDiv.children);

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);


var pierwszyChildv = pierwszyDiv.childNodes[6];
console.log(pierwszyChildv);
console.log(pierwszyChildv.previousElementSibling);
