$("#count-sum").on("click", function(){
    let sum = 0;
    let allSalary = $('.salary');
    $(allSalary).each(function(){
         sum += parseInt($(this).text()); 
    }) 


     /*let salary1 = $("#person1 .salary").text();
     let salary2 = $("#person2 .salary").text();
     let salary3 = $("#person3 .salary").text();
     let salary4 = $("#person4 .salary").text();
     let salary5 = $("#person5 .salary").text();

     let sum =  parseInt(salary1) + parseInt(salary2) + parseInt(salary3) + parseInt(salary4) 
     + parseInt(salary5);*/

     $("#sum").text(sum);

}) 

 