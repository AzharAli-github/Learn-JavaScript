//Example One
let textOne = document.getElementById('textOne');

function DisplayOne() {
    textOne.innerHTML = "Hope you are Fine";
}
// Example Two
let imgOne = document.getElementById('imgOne');

function DisplayTwo() {
    imgOne.src = "images/two.jpg"
}
// Example Three
let textTwo = document.getElementById('textTwo');

function DisplayThree() {
    textTwo.innerHTML = "Date" + Date();
}
DisplayThree();

// Example Four

let textThree = document.getElementById('textThree');

textThree.innerHTML = document.write(Date())