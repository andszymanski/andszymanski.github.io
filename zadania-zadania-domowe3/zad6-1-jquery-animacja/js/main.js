$("button").click(function(){
    $('#rectangle').animate({
        left: "100px",
        height: "100px",
        width: "100px",
        
    }, 3000, function(){
        $('#rectangle').animate({
            backgroundColor: 'blue'
             
        }, 5000, 
            function () {
              $('#rectangle').find('#text').animate({
                'opacity' : '1'});
        });
    });
}); 

  
