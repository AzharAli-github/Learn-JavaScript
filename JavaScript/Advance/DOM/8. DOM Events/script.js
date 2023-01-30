let textOne = document.getElementById('textOne');

function DisplayOne() {
    textOne.innerHTML = "OOPs!";
}

let textTwo = document.getElementById('textTwo');

function DisplayTwo() {
    textTwo.innerHTML = new Date();
}

let textThree = document.getElementById('textThree');

function DisplayThree() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    textThree.innerHTML = text;
}

let hover = document.getElementById('hover');

function DisplayFour() {
    let x = true;
    if (x == true) {
        hover.style.backgroundColor = '#00FF00';
        x = false;
    } else {
        hover.style.backgroundColor = 'white';
        x = true;
    }

}