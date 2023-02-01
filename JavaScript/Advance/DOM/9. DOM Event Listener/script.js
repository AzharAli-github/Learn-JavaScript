// Example One
let exampleOne = document.getElementById('exampleOne');

exampleOne.addEventListener("click", () => {
    exampleOne.style.backgroundColor = "Green";
    exampleOne.style.color = "white";
});


// Example Two
let exampleTwo = document.getElementById('exampleTwo');

exampleTwo.addEventListener("mouseover", () => {
    exampleTwo.style.backgroundColor = "Blue";
    exampleTwo.style.color = "White";
});
exampleTwo.addEventListener("mouseout", () => {
    exampleTwo.style.backgroundColor = "white";
    exampleTwo.style.color = "Green"
});

// Example Three

let exampleThree = document.getElementById('exampleThree');

exampleThree.addEventListener("mouseover", () => {
    exampleThree.style.backgroundColor = "purple";
    exampleThree.style.Color = "white";
})

exampleThree.addEventListener("mouseout", () => {
    exampleThree.style.backgroundColor = "white";
    exampleThree.style.color = "purple";
})