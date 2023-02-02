// Child Nodes and Values
let id1 = document.getElementById('id1');
let id2 = document.getElementById('id2');

function DisplayOne() {
    id2.innerHTML = id1.firstChild.nodeValue;
}

// Child Nodes and Values Example 2

let textOne = document.getElementById('textOne');
let textTwo = document.getElementById('textTwo');

function DisplayTwo() {
    textTwo.innerHTML = textOne.childNodes[0].nodeValue + " " + textTwo.childNodes[0].nodeValue;
}

// Child Nodes and Values Example 3

let textThree = document.getElementById('textThree');
let textFour = document.getElementById('textFour');
let textFive = document.getElementById('textFive');

function DisplayThree() {
    textFive.innerHTML = textThree.childNodes[0].nodeValue + textFour.childNodes[0].nodeValue;
}