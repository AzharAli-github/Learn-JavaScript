/* 
     In Asynchronous functions run parallel to each other which are called Asynchronous 
     Best example is setTimeOut()
     and setInterval()
*/

//  Example of setTimeOut

function DisplayOne() {
    let text = "Hey There!";
    document.getElementById('textOne').innerHTML = text;
}

setTimeout(DisplayOne, 2000); //Here we have called a function and also defined after how many miliseconds will the function load


//  Example of setInterval()

function DispTwo() {
    let x = new Date();
    let time = x.getHours() + " : " + x.getMinutes() + " : " + x.getSeconds();
    document.getElementById('textTwo').innerHTML = time;
}

setInterval(DispTwo, 1000);