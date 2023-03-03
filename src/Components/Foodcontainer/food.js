console.log("done")

function showresult() {
    const APP_ID = "65f8da3b";
    const APP_KEY = "a8d19589033daabef1363597e7011487";
    let inptext = document.querySelector(".user_input").value
    const url = `https://api.edamam.com/search?q=${inptext}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;

    fetch(url)
        .then((resposne) => resposne.json())
        .then((data) => {
            console.log(data);
        });
}