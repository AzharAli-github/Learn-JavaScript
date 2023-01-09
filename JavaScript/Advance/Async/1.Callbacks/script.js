/* This is a Simple Example of Function that are called upon each other
 It also includes Callback functionality but we cannot control the result 
*/
function DisplayOne(dispOne) {
    document.getElementById('textOne').innerHTML = dispOne;
}

function Sum(num1, num2) {
    let sum = num1 + num2;
    return "Sum of " + num1 + " and " + num2 + " = " + sum;
}
let result = Sum(99, 2);
DisplayOne(result);

/*
To getting control over the function we use the following Example Below
Actual function of Callback()--Below
 */

function DisplayTwo(dispTwo) {
    document.getElementById('textTwo').innerHTML = dispTwo;
}

function Mult(num3, num4, callBack) {
    let mult = num3 * num4;
    callBack("The Multiplication of " + num3 + " and " + num4 + " = " + mult);
}
Mult(12, 2, DisplayTwo);


function Disp() {
    var inpValue = document.getElementById('inpOne').value;
    document.getElementById('paraText').innerHTML = inpValue;
}