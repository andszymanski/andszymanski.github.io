"use strict";

var mainHeader = document.getElementById("header");   //przypisujemy nagłówek do zmiennej/
console.log(mainHeader);

console.log(mainHeader.innerHTML);
console.log(mainHeader.innerText);
console.log(mainHeader.outerHTML);

mainHeader.id = "nowe-id";

mainHeader.setAttribute("class", "hearer");
mainHeader.className = "nowa-lista";
console.log(mainHeader.outerHTML);
let klasy = mainHeader.className;
console.log(klasy);

mainHeader.classList.add("active");
mainHeader.classList.remove("active");
mainHeader.classList.toggle("usuwanie/dodawanie");
console.log(klasy);

let zmienKolor = document.getElementById("toggle");
zmienKolor.addEventListener("click", () => {
     zmienKolor.classList.toggle("active");
});

zmienKolor.style.color = "red";
zmienKolor.style.background = "lime";

