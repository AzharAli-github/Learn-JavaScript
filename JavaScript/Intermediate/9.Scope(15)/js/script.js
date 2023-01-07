/* There are three type of Scope:
1.Block Scope
2.Golbal Scope
3.Functional Scope

Two main scopes let and const which are block scope were introduced after ES6

*/

// First we will discuss Block Scope

var a = 2;
console.log(a);

let b = 3;
console.log(b);

const c = 4;
console.log(c);


// Now we will discuss about Functional Scope

function Scope() {
    let d = 3; //In functional scope the variable are declared inside the function and cannot be accessed outside
    console.log(d);
}

// Global Scope

let e = 9; // In Global Scope variables are Global they can accessed inside a function and anywhere in the Program

function Display() {
    console.log(e);
}
console.log(e);
// Do not try to use Global Scope Unless you intend because your global variables and functios can overwrite the window