'use strict';

console.log("działa");

let kaja = {
    imie: "Kaja",
    wzrost: 153,
    przedstawOsobe() {
        console.log(this.imie);
    }

}
let krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe() {console.log(this.imie);}
}

    kaja.przedstawOsobe();


    console.log(kaja.wzrost);
    console.log(kaja);


    let monetaZl = {

        promien:20,
        nominal: 100,
        waga:50,
        material: "zloto",
    }
    {

console.log(monetaZl.material);
    }


class Osoba {
    constructor(imie, nazwisko, wzrost, oczy)  {
        this.imie = imie || "imie";
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
        this.oczy = oczy;
    }

    wyswietlInfo()  { 
    console.log("Imie: " + this.imie + "\n" +
    "Nazwisko: " + this.nazwisko + "\n" +
    "Wzrost: " + this.wzrost + "\n" +
    "Oczy: " + this.oczy);
    }

}

let krystian = new Osoba ("Krystian", "Dziopa", 100, "niebieskie");
let andrzej = new Osoba ("Andrzej", "Szymanski", 177, "niebieskie");
andrzej.wzrost = 176;
andrzej.wyswietlInfo();
console.log(krystian,andrzej);
// sprawdzic blad/
