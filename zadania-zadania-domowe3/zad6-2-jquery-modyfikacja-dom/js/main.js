"use strict"

$("#bttn1").on("click", function(){

    $("p:last").insertBefore("p:first");
});
 


$("#bttn2").on("click", function(){
    $("p:first").insertAfter("p:last");
});
 