"use strict";

// In strict mode objects are variables too

x = 4.12; // will create an error because it is not defined

delete x; //creates error because deleting is not allowed in strict mode


// Deleting a function is not allowed
function z(p1, p2) {};
delete z;


// Dublicating Parameter name is not allowed
function w(p3, p3) {};


// using octal number is not allowed
let i = 010;


// using eval is not allowed
let eval = 3.14;


// with statement is not allowed
with(Math) { x = cos(2) };