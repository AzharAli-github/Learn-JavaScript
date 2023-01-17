//    Fetch API
let textOne = document.getElementById('textOne');

function DisplayOne() {
    textOne.innerHTML = `
    <p>The Fetch API interface allows web browser to make HTTP requests to web servers.
    😀 No need for XMLHttpRequest anymore.</p>
    <h3>Understand the Below Example
    </h3>
    `
}

//   Example 1 : Fetch API   :  Simple Way to understand
let textTwo = document.getElementById('textTwo')

function DisplayTwo() {
    let file = "FIVERR.txt"
    fetch(file)
        .then(x => x.text())
        .then(y => textTwo.innerHTML = y);
}

//   Example 2   :  Fetch API  :    Better Way of UnderStanding

let textThree = document.getElementById('textThree')

function DisplayThree() {
    getText("FIVERR.txt");

    async function getText(file) {
        let x = await fetch(file);
        let y = await x.text();
        textThree.innerHTML = y;
    }
}

//    Example 3    :  Fetch API  :   Best Way of UnderStanding

let textFour = document.getElementById('textFour')

function DisplayFour() {
    getText("FIVERR.txt");

    async function getText(file) {
        let myObject = await fetch(file);
        let myText = await myObject.text();
        textFour.innerHTML = myText;
    }
}