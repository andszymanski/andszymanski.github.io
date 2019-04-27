'use strict';

// console.log("działa");

let liczba1 = 8, liczba2 = 3;

let wynik;

wynik = liczba1 % liczba2;
console.log(wynik);


liczba1 = liczba1 + 100;

liczba1 <= 100;
liczba1 <= 200;
console.log(liczba1);


if ("2" == 2) {
    console.log("prawda");
}
else {
    console/log("Nie prawda");
}

if ( !(( "2" !== 2) && (8 < 4 ) ) ) {
    // documentwrite("<br> prawda");
}

let wyniklogiczny = (5>=5)  ? "prawda" : "fałsz";
console.log(wyniklogiczny);

// sprawdzic blad/

let wzrostMateusza = 160;
let wzrostOlgi = 140;

if ( wzrostOlgi > wzrostMateusza ) {
    console.log("Olga jest nizsza :)");
}

else if ( wzrostOlgi == wzrostMateusza) {
    console.log("Olga jest nisza");
}


else {
    console.log("Olga jest nisza");
}


let kolor = "zielony";

switch (kolor) {
        case "czerwony":
        console.log("Kolor czerwony");
        // break;
        case  "zielony":
        console.log("Kolor zielony");
        // break;
        case "niebieski":
        console.log("kolor niebieski");
        // break;
        default:
        console.log("Inny kolor");
}
