$('button').click(function(){
    $.ajax({
        url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
        method: 'get'
    })
    .done(function(response){
        let object = JSON.parse(response);

        $('body').append('<div id="dane-programisty" class="new-element"></div');

        $("#dane-programisty").append("<p>Imie i nazwisko: " + object.imie + " " + object.nazwisko + '</p>');
        $("#dane-programisty").append("<p>Zawód: " + object.zawod + "</p>");
        $("#dane-programisty").append("<p>Firma: " + object.firma + "</p>");
    });
})
