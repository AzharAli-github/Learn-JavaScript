/*  Validation in JavaScript API 
      There many types of Validation at first we will try
         1.checkValidity()
*/

let textOne = document.getElementById('textOne');

function DisplayOne() {
    const InpObjOne = document.getElementById('inputOne');
    if (!InpObjOne.checkValidity()) {
        textOne.innerHTML = InpObjOne.validationMessage;
    } else {
        textOne.innerHTML = "Great it's OK!"
    }
}

//  2. rangeOverflow Property

let textTwo = document.getElementById('textTwo');

function DisplayTwo() {
    let inputTwo = document.getElementById('inputTwo');
    if (inputTwo.validity.rangeOverflow) {
        text = "Value is Too Large"
    }
}


// 3. rangeUnderflow Property

let textThree = document.getElementById('textThree');

function DisplayThree() {
    let inpThree = document.getElementById('inpThree');
    if (inpThree.validity.rangeUnderflow) {
        textThree.innerHTML = "Value is Too Small"
    }
}