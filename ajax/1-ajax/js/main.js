// 1.AJAX -FECH

// fetch('https://jsonplaceholder.typicode.com/posts') 
// .then(response => response.json())
// .then(response => {console.log(response)});

// 2. AJAX - $-get.JSON()

// $.getJSON(
//     "https://jsonplaceholder.typicode.com/posts" ,
//     response => {
//         console.log(response);
//     }
// )

// 3. AJAX - ajax () JS 

// $. ajax({
//     url: "https://jsonplaceholder.typicode.com/users",
//     dataType: "json",
//     success: function (resultJSON) 
//     { console. log(resultJSON);
//     },
//     onerror: function (msg) 
//     { console. log(msg);
//     } 
// });
    
// 4.AJAX - czysta funkcja JS

const ajax = (method, url) => {
    // TWORZYMY OBIEKT

    let httpReq = new XMLHttpRequest();

// otwieramy połączenie
httpReq.open(method, url);

// w momencie dotarcia do serwera
httpReq.onreadystatechange = () => {

    // jesli wszystko poszło pomyslnie i dane zostały zwrócone
    if (httpReq.readyState === 4  && httpReq.status === 200) {

        //  wrzucamy gotowe dane do zmiennej 

        let response = httpReq.responseText;

        // parsujemy json stringa do tablicy

        response = JSON.parse(response);

        console.log(response);

        // rozłaczamy sie z serwersem

        httpReq = null;
} 
}
// wywołujemy  onreadystatetechange()
httpReq.send();
}


setInterval(() => {
ajax("GET" , "https://jsonplaceholder.typicode.com/users");
} , 3000);



