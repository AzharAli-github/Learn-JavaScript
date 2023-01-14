/*
     There are three types of pop-ups in JavaScript
       1. Confirm Box
       2. Prompt
       3. Alert

       Understand the Examples Below to get Acknowledged about pop-ups
*/
function firstDisplay() {
    window.confirm("Are you enjoying nowadays?")
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
}

//  Example 2 we will discuss about prompt

function secondDisplay() {
    let person = window.prompt("What is your Name?");
    let text;
    if (person == null || person == "") {
        alert("Don't Try to Skip, Click on Second Button and Enter your Name");
    } else {
        alert("Thanks " + person + "!")
        console.log(person)
    }
}

// Example 3 is very simple and which is alert

function thirdDisplay() {
    alert("Enjoy your Day!")
}