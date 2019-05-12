
const button = document.getElementById("button");

const getDate = () => {
    // console.log("click click");
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(response => {
            const user = response;
            const paragraf = document.createElement("p");

            paragraf.innerHTML = `<span>User ID: ${user.id}</span><br  /> 
                          <span>User NAME: ${user.name}</span><br  />
                          <span>User WEBSITE: ${user.website}</span>`;

            button.insertAdjacentElement("afterend", paragraf);

        });
}

button.addEventListener("click", getDate);
button.onclick = getDate;

// const button = documentById("button");
// const getDate = () => {

//     const date = fetch('https://jsonplaceholder.typicode.com/users/1" )
//     .then(response => response.json())
//     .then(response => {
//         const user = response;
//         const paragraf = document.createElementCreateelement("p");
//         paragraf.innerHTML = 
//         <span>User ID: $(user.id)</span><br  />
//         <span>User NAME: $(user.name)</span><br  />
//         <span>User WEBSITE: $(user.website)</span><br  />

//         const userKeys = Object.keys(user);
//         userKeys.forEach(key => {
//             const paragraf = document.createElement("p");

//             if(typeof user[key])
//         })




//      button.insertAdjacentElement("aftered, paragraf");
//     });

//     button.addEventlistener("click", getDate);

