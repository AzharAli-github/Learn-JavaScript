//        Elements in DOM
let textOne = document.getElementById('textOne');

function DisplayOne() {
    textOne.innerHTML = `
    <h1>Finding HTML ELements</h1>
    <li>Finding HTML Elements by id</li>
    <li>Finding HTML Elements by className</li>
    <li>Finding HTML Elements by tagName</li>
    <li>Finding HTML Elements by CSS Selector</li>
    <li>Finding HTML Elements by HTML Object Collection</li>
    <h3>Below Example Getting Elements by id and CSS Selectors can be changed and displayed but getting element from className and tagName does not work properly</h3>
    `
}

//   Getting Element By Id

let textTwo = document.getElementById('textTwo'); // --> Mostly Used

function DisplayTwo() {
    textTwo.innerHTML = "WE HAVE GOT THIS VALUE FROM id"
}

//   Getting Elements by className

let textThree = document.getElementsByClassName("textThree"); // --> Not Used Mostly

function DisplayThree() {
    textThree.innerHTML = "WE HAVE GOT THIS VALUE FROM className";
}

//   Getting Elements by tagName

let textFour = document.getElementsByTagName('h3'); // Use Fewly

function DisplayFour() {
    textFour.innerHTML = "WE HAVE GOT THIS VALUE FROM tagName";
}

//   Getting Elements by  CSS Selector

let textFive = document.querySelector('p.one');

function DisplayFive() {
    textFive.innerHTML = "WE HAVE GOT THIS VALUE FROM CSS Selector";
}

// Getting Elements by Object Collections

let form = document.forms["frm1"];

function DisplaySix() {
    let text = "";
    for (let i = 0; i < form.length; i++) {
        text += elements[i].value + "<br>";
    }
    form.innerHTML = text;
}