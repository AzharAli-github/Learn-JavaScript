// var message = function ()
// {
//     document.write("Hello")
// }
// message();


// function compare (x,y)
// {
//     document.write("Hello")
// }
// compare();

var message = "in global";
console.log("global: message= " + message);

var a = function (){
    var message = "inside a";
    console.log("a:message " + message);
    b();
}
function b () {
    console.log("b:message = " + message);
}
a();