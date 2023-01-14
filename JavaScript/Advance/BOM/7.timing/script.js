/*
    Timing in JavaScript adds interactivity to function that how much time will it take to load
    a function, after how many time will the function display or clear:
    We will discuss some of the timing constraints in JavaScript:
    1. SetTimeout(function(){}, 1000()
*/
let textOne = document.getElementById('textOne');

setTimeout(function DisplayOne() {
    textOne.innerHTML = "Hi There!"
}, 2000);

// Now we will discuss the second method of timimg which is
//     2. clearTimeOut(function(){}, 1000) : This is used for stoping the execution

let textTwo = document.getElementById('textTwo');

function DisplayTwo() {
    x = setTimeout(function() {
        textTwo.innerHTML = "Hello after Three Second!"
    }, 3000);
    return x;
}

function StopTwo() {
    clearTimeout(x)
    alert("You have stopped the operation")
}

// I loved working in the above code now next is..
//  3. setInterval(function(){}, miliseconds)

let textThree = document.getElementById('textThree');

function DisplayThree() {
    setInterval(function() {
        textThree.innerHTML = "HELLO Example 3 here after 2 Seconds"
    }, 2000)
}
DisplayThree();


// Our Next Topic is clearInterval

let textFour = document.getElementById('textFour');

function DisplayFour() {
    y = setInterval(function() {
        textFour.innerHTML = "EXAMPLE FOUR HERE!";
    }, 3000)
}

function StopFour() {
    clearInterval(y);
    alert("You have Stoped Example Four Operation!")
}