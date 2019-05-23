'use strict';

// console.log("działa");

const PI = 3.14;

function poleKola(r) {
    let poleKola = PI * r * r;

// console.log(poleKola);

}



// poleKola(25);

// poleKola(50);

// poleKola(100);

let rDuzego =100;

poleKola(rDuzego);

    // es6/
const poleKKola = (r) =>
{
    let poleKola = PI * r * r;

// console.log(poleKola);
return poleKola;
}

poleKola (25, 3);
poleKola(50, 5)

rDuzego = 108;


let wynikDzialaniaFunkcji = poleKKola(rDuzego, 10);
alert(wynikDzialaniaFunkcji);

