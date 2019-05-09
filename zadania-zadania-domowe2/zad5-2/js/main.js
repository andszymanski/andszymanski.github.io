function addListElement(){
    let list = document.getElementById("items");
    let allLi = list.querySelectorAll('li').length + 1;

    let li = document.createElement("li");
    li.innerHTML = 'Item ' + allLi;
    li.classList.add("item");
    list.appendChild(li);   
}