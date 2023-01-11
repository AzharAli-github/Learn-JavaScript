/*
   Asynchronous and Await Function were developed in ECMAScript 2017
   It is related to Promise which we discussed in previous topic 
   'async' function is used to return Promise
   'await' makes function which waits for a Promise

   First of all we will discuss about async:
   UnderStand the following Program 
   Example

 */

let textOne = document.getElementById('textOne');

function Display(disp) {
    textOne.innerHTML = disp;
}
async function Add(a1, a2) {
    let x = a1 + a2;
    return x;
}
Add(22, 25).then(
    function(value) { Display(value) }
)

/*
    Example 2 for Learning Concept of Await
 */

let textTwo = document.getElementById('textTwo');

async function DisplayTwo() {
    let promiseTwo = new Promise(function(resolve, reject) {
        resolve("Resolved")
    });
    textTwo.innerHTML = await promiseTwo;
}
DisplayTwo();

//   Example 3 for Learning the concept of using setTimeOut in Async-Await

let textThree = document.getElementById('textThree');

async function DisplayThree() {
    let promiseThree = new Promise(function(resolve) {
        setTimeout(function() { resolve("Resolved Display Three"); }, 2000);
    })
    textThree.innerHTML = await promiseThree;
}
DisplayThree();



// Example 4 for Learning the concept of Waiting for a File which was my Dream to learn
// I will complete that task after learning AJAX XMLHttpRequest