// Mention All the Documents and Info about Web API's
let textOne = document.getElementById('textOne');

function DisplayOne() {
    textOne.innerHTML = `
    <h3>A Web API is a developer's dream.</h3>
    <li>It can extend the functionality of the browser</li>
    <li>It can greatly simplify complex functions</li>
    <li>It can provide easy syntax to complex code</li>
    <h1>What is Web API?</h1>
    <p>API stands for Application Programming Interface.</p>
    <p>A Web API is an application programming interface for the Web.</p>
    <p>A Browser API can extend the functionality of a web browser.</p>
    <p>A Server API can extend the functionality of a web server.</p>
    `
}


// Example For Understanding Web API

let textTwo = document.getElementById('textTwo');

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showLocation);
    } catch {
        textTwo.innerHTML = "Error Just Happened";
    }
}

function showLocation(position) {
    textTwo.innerHTML = "Latitude= " + position.coords.latitude + "<br> Longitude= " + position.coords.longitude;
}