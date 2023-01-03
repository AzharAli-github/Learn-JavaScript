let fruits = ["apple", "mango", "banana", "graps"];
let text = "";
for (const a of fruits) {
    text = text + a + "<br>";
}
document.getElementById("fruit").innerHTML = text;