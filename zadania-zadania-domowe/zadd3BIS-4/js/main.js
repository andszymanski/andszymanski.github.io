let counter = 10;

let interval = setInterval(countToZero, 1000);

function countToZero(){
    if(counter == 0){
        document.getElementById('odliczanie').innerHTML = 'I love CSS :)';
        clearInterval(interval);
        return 0;
    }
    document.getElementById('odliczanie').innerHTML = counter;
    counter = counter - 1;
}