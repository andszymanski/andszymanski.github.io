$(() => {
    const getDate = () => {
        console.log("test")
        $.getJSON("https://jsonplaceholder.typicode.com/users/1"),
            response => {
                const paragraf = $(`<p>`);
                const user = response;
                paragraf.html = `<span>User ID: ${user.id}</span><br  /> 
                          <span>User NAME: ${user.name}</span><br  />
                          <span>User WEBSITE: ${user.website}</span>`;
                $(" #button").after(paragraf);
            };
    };
    $("#button").click(() => {
        getDate();
    })
});