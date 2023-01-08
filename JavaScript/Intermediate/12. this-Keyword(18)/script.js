/*
    .this key word is famous in world of JavaScript and it refers to Objects
    You Should must gain Information About Objects Before Going to .this key word

    Understand the following Program for better Understanding of .this in Object
*/
const Person1 = {
    firstName: "Azhar",
    lastName: "Ali",
    RegNo: 1234,
    fullName: function() {
        return "Full Name: " + this.firstName + " " + this.lastName + "<br>" + "Registration No. " + this.RegNo;
    }
}

let textOne = document.getElementById('textOne');
textOne.innerHTML = Person1.fullName();

/*
       Now Applying .this key workd in two objects by different methods
       1. call() : 
       2. apply() : 
*/

const Student1 = {
    firstName: "Mark",
    lastName: "Jack",
    RollNo: 2201,
}
const Student2 = {
    fullName: function() {
        return `
        <p>Full-Name: ${this.firstName + " " + this.lastName}</p>
        <p>Roll-Number: ${this.RollNo}</p>
        `
    }

}
let textTwo = document.getElementById('textTwo');
let display = Student2.fullName.apply(Student1);
textTwo.innerHTML = display;