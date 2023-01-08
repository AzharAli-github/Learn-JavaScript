// In hoisting we can use a variable before defining it
var x; // --> we have declared a variable without defining it

const Disp = () => {
    console.log("x = " + x); // --> we have use a variable before defining it
}

x = 7; // --> declared a variable at last

Disp();

/* If you will try to use let or const instead of var then there will be the following error:
1. for let : Reference Error
2. for const: Syntax Error
*/

//  Note: Initialization does not work in hoisting you should initialize a variable before and can give any value to it later