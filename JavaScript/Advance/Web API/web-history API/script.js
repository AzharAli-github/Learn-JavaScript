// In this lesson we will learn about Web History API

let textOne = document.getElementById('textOne');
let viewDoc = document.getElementById('viewDoc');

viewDoc.addEventListener("click", () => {
    let x = true;
    if (x == true) {
        textOne.innerHTML = `
    <p>The Web History API provides easy methods to access the windows.history object.</p>
    <p>The window.history object contains the URLs (Web Sites) visited by the user.</p>
    <h1>There are three main types of History API</h1>
    <li>back()</li>
    <li>go(-2)</li>
    <li>forward()</li>
    <h2>Check the Examples Below with the .js files for better Understanding</h2>
    <p style ="font-family: monospace; color: red;">This will work when we are having more than one web pages in a website</p>
    `
        x = false;
    } else {
        textOne.innerHTML.style.display = "none";
        x = true;
    }
})

//  History back()

function DisplayTwo() {
    window.history.back();
}

//  History go()

function DisplayThree() {
    window.history.go(-2);
}

//   History forward()

function DisplayFour() {
    window.history.forward();
}