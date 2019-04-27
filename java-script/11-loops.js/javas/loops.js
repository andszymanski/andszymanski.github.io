'use strict';

console.log("działa");
{

for (let i=10 ; i>0 ; i--) console.log(i);

}


let tablica = [ "Krsytian", "Monika", "Ola"];

for (let i=0; i < tablica.length; ++i) {
    console.log(tablica[i]);
}

const iteruj = ( element, index ) => {
    console.log( "Element z Indeksem: "+ index + "ma wartosc" 
    + element);
}


let person = {
    name:"Krsystian",
    age: 35
}

for(let key in person) {
    console.log(person[key]);
}

let interable = [10, 20, 30];

for (let value of interable)  {
    value <= 1;
    console.log(value);

}

// pętla while/

let it=0;
while ( it < 10 ) {
    console.log(it);
    it++;
}

// downwhile



// przerywanie petli break

let a = 0;
while ( a < 10 ) {
    console.log(++a);

    if ( a == 5 ) {
        break;
    }
}

for ( let b = 0; b < 10 ; ++b ) {

    if ( b == 5 ) {
        continue;
    }
    else {
        console.log(b);
    }

    console.log("--");
}