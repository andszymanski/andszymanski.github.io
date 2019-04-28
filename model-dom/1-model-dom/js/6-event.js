"use strict";

let parSecond = document.querySelector("#parSecond");
console.log(parSecond);

let parWParSecond = document.getElementById("parWParSecond");
console.log(parWParSecond);

const klikDiv = (e) => {
    console.log("kliknięto DIV");
}
const klikPar = (e) => {
    // e.stopPropagation();
    console.log("klikniieo paragraf");
}

parSecond.addEventListener("click", klikDiv);
parWParSecond.addEventListener("click", klikPar);




// const klikAlert = (e) => {
//     e.preventDeflaut();
//     alert("kliknieto DIVa:)");
// //     console.log(e.target);
// }

// parSecond.onclick = klikAlert;

// parSecond.addEventListener("dblclick", (e) => {
//     alert ("funkcja anonimowa")
//     a.preventDeflaut();
//     console.log(e);
// });

// parSecond.removeEventListener("click", klikAlert);


// let link = document.querySelector(".link");
// link.addEventListener("click", klikAlert);