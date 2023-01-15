/*
    You should have heard about cookie while using a website, which always pops up at you, and some people say it is harmfull because it collects data from us.
    Let's get indepth of cookie...
    >> Cookies are data, stored in small text files on your computer
       > Cookies were invented to solve the problem of "how to remember information about the user"
          > when a user visits a web page his name can be stored in a cookie
          > next time the user visits the web page he can remember his name
    We will try by our first Example
    
    Example 1:
*/
let textOne = document.getElementById('textOne');

let rememberPersonOne = document.cookie = "username= John Doe";

textOne.innerHTML = rememberPersonOne;

// Cookies can be changed or deleted the same way that they have been created
//    for Example
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


/* Now there are three main functions of cookies 
      1. setCookie()
      2. getCookie()
      3. checkCookie()
*/

// In this Example we will discuss about how to setCookie()   

let textTwo = document.getElementById('textTwo');

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
textTwo.innerHTML = setCookie.apply();


//  getCookie

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
textThree.innerHTML = getCookie();

//  checkCookie

let textFour = document.getElementById('textFour');

function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}
textFour.innerHTML = checkCookie();