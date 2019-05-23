'use strict';

class Book  {
    constructor(tytul,autor,przeczytana){
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {
        if(this.przeczytana === true) {
        return "Ksiązka ma tytuł" + this.tytul + ",jej autorem jest" + this.autor + 
        "i została przeczytana.";
        }
        else {
        return "Ksiązka ma tytuł  " + this.tytul + " ,jej autorem jest " + this.autor + 
        " i nie została przeczytana.";
        }
    }
}

var naszaSzkapa = new Book("Nasza Szkapa", "Maria Konopnicka", false);
var jankoMuzykant = new Book("Janko Muzykant", "Henryk Sienkiewicz", true);
var bialyKieł = new Book("Biały Kieł", "Jack London", false);

naszaSzkapa.opiszKsiazke();
jankoMuzykant.opiszKsiazke();
bialyKieł.opiszKsiazke();

var tablicaBook =[naszaSzkapa,jankoMuzykant,bialyKieł];


console.log(2 === '2');



function iloscPrzeczytanych(tablicaBook) {

    var suma = 0;
    for(var i=0; i<tablicaBook.length; i++) {
            console.log(i);


        if (tablicaBook[i].przeczytana === true) {
            // suma += 1;
            suma = suma + 1;
        }
        console.log(tablicaBook[i].opiszKsiazke());

    }
    console.log("ksiązki przeczytane: " + suma);
    }

iloscPrzeczytanych(tablicaBook);


