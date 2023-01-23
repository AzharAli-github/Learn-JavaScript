//  Web Worker API
let textOne = document.getElementById('textOne');

function DisplayOne() {
    textOne.innerHTML = `
    <h2>Web Worker is a JavaScript running in the Background</h2>
    <h3 style="font-family: sans-serif">When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.

    A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.</h3>
    `
}

//      Example to Understand

let w;

function startWorker() {
    if (typeof(w) == "undefined") {
        w = new Worker("worker.js");
    }
    w.onmessage = function(event) {
        document.getElementById("textTwo").innerHTML = event.data;
    };
}

function stopWorker() {
    w.terminate();
    w = undefined;
}