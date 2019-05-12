const getData = () => {
    if (window.scrollY > document.body.offsetHeight) {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(date => {
        console.log("wykonaj request");
    })
}
}
window.addEventListener("scroll" , getData);
