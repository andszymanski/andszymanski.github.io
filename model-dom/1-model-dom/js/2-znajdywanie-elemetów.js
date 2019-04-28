"use strict"

let parFirst = document.getElementById( "parFirst");
console.log(parFirst);


var link = document.getElementsByClassName ("superlink");
console.log(link);
var linkiPoTagu = document.getElementsByTagName ("a");
console.log(linkiPoTagu)

var divPoId = document.querySelector( "#parSecond");
console.log(divPoId);

var pierwszyLinkPoSelektorze = document.querySelector(".uperlink");
console.log(pierwszyLinkPoSelektorze);

var linkiPoSelektorze = document.querySelectorAll(".superlink");
console.log(linkiPoSelektorze);

linkiPoSelektorze.forEach( (link, i) => {
    console.log(link.outerHTML);

    
});
