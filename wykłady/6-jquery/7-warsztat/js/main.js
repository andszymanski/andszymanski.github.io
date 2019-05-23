$(() => {
// ZMIENNE
const slideShow = $(".slide-show");
const singleSlide = $(".single-slide");
const slideCount = singleSlide.length;
const slideWidth = 100 /slideCount;
let indexCounter = 0;

// USTAWIAMY DYNAMICZNIE SZEROKOSC KONTENERA
slideShow.css("width", slideCount * 100  + "%");


//USTAWIAMY DYNAMICZNIE SZERKOSC OBRAZKÓW
singleSlide.each(function(index) {
    $(this).css({
        "width" : slideWidth + "%",
        "margin-left" : index * slideWidth + "%"
    });
});

// PODPINAMY EVENTY CLICK NA PRZYCISKI

$(".prev-slide").click(function() {
  slide(indexCounter - 1);
});

$(".next-slide").click(function() {
  slide(indexCounter + 1);
});

function slide(newIndex)  {
    
if (newIndex < 0 || newIndex >= slideCount) {
    return;
}

// ukrywaamy napis
const currentTitle = $(".slide-caption").eq(newIndex);
currentTitle.fadeOut();

const marginLeft = newIndex * (-100) + "%";

// wywołanie animacji
slideShow.animate( {
    "margin-left": marginLeft
}, 1000 , function() {
    currentTitle.fadeIn();
   
});

indexCounter = newIndex;
}
});