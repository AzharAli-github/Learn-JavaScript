/*
      A JavaScript Promise contain two type of code:
      1. "Consuming Code "
      2. "Producing Code" : It contains the result and should call one of the callbacks
        ⏩ it will callback the error or the succes
    Understand the following Program how to use promise
 */
let textOne = document.getElementById('textOne');

function Display(some) {
    textOne.innerHTML = some;
}

let myPromise = new Promise(function(Resolve, Reject) {
    let x = 0;
    if (x == 0) {
        Resolve("Open script.js file and console for better Understanding !");
    } else {
        Reject("Error just Occured");
    }
})

myPromise.then(
    function(success) { Display(success) },
    function(error) { Display(error) }
);