"use strict";

let btn = document.createElement("button");
console.log(btn);

let txtbtn = document.createTextNode("Kliknij mnie");
console.log(txtbtn);

let classBtn = document.createAttribute("class");
console.log(classBtn);

classBtn.value = "btn";
console.log(classBtn);

btn.appendChild(txtbtn);
btn.setAttributeNode(classBtn);
btn.setAttribute("onclick","btnClick();")
console.log(btn);


document.body.appendChild(btn);

btn.removeAttribute("onclick");
btn.removeAttribute("class");

btn.parentElement.removeChild(btn);

