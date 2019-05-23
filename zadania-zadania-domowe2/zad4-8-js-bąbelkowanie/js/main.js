'use strict';
var liczby = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log(liczby);

function sortowanieBąbelkowe(liczby) {
    for (var i = 0; i <liczby.length ; i++) {
        for (var z = 1; z < liczby.length ;z++) {
            if (liczby[z-1] > liczby[z]) {
                var zad = liczby[z];
                liczby[z] = liczby [z-1];
                liczby[z-1] = zad;
            }
        }
    }
    return liczby;
}

console.log(sortowanieBąbelkowe(liczby));