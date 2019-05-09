function listaMiast(){
    let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

    let ul = document.createElement('ol');

    for(let i = 0; i < cities.length; i++){
        let li = document.createElement('li');
        li.innerHTML = cities[i];
        li.classList.add('city');
        ul.appendChild(li);
    }



    document.body.appendChild(ul);
}

listaMiast();


function pokazNapis(napis){
    console.log(napis);
}

function rrso(a,b){
    let pole = a * b * 2;
}



