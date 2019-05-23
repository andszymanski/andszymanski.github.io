$("body")
.find(".par2")
.text("Tekst zmieniony w kodzie find()")
.css("color" , "red");

let par2 = $(".par2");


// jQuery
par2.each(function(index, biezącyParagraf) {
    if (index === 0) {
        $(biezącyParagraf)
        .css("color", "green")
        .text("Teskt zmieniony w metodzie each()");
    }
    else if (index === 1) {
        $(biezącyParagraf)
        .css("color", "blue")
        .text("Teskt zmieniony w metodzie each()");
    }
    else if (index === 2) {
        $(biezącyParagraf)
        .css("color", "yellow")
        .text("Teskt zmieniony w metodzie each()");
    }
});

// JS in ES6
// [1,2,3].forEach(element, index) => {

// }
