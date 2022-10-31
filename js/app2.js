const API_URL = "https://jsonplaceholder.typicode.com";
const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.response)
        const HTMLResponse = document.querySelector("#app");
        const tpl = data.map((user) => `<li>${user.name}</li>`);
        HTMLResponse.innerHTML = `<ol>${tpl}</ol>`;
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET',`${API_URL}/users`);
xhr.send()