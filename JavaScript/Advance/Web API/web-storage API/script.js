/* Storage API are used for storing data files
    There are two main types of storing data in web page
       1. localStorage() --> used for storing data permenantly
       2. sessionStorage() --> used for storing data for short period of time
*/
let textOne = document.getElementById('textOne');

function DisplayOne() {
    textOne.innerHTML = `
    <h2>Storage API are of Two Types</h2>
    <h3>1. localStorage: ()</h3>
    <p>Used for Storing Data Permanently</p>
    <h3>2. sessionStorage()</h3>
    <p>Used for Storing Data Short Time</p>
    `
}

// Example One localStorage()

let textTwo = document.getElementById('textTwo');

function DisplayTwo() {
    localStorage.setItem("name", "Azhar");
    textTwo.innerHTML = localStorage.getItem("name");
}

// Example Two sessionStorage()

let textThree = document.getElementById('textThree');

function DisplayThree() {
    sessionStorage.setItem("name", "Musharraf");
    textThree.innerHTML = sessionStorage.getItem("name");
}