// Geolocation API

// Example One

const textOne = document.getElementById("textOne");

function getLocationOne() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPositionOne);
    } else {
        textOne.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPositionOne(position) {
    textOne.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}


//   Example Two

const textTwo = document.getElementById("textTwo");

function getLocationTwo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPositionTwo, showError);
    } else {
        textTwo.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPositionTwo(position) {
    textTwo.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            textTwo.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            textTwo.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            textTwo.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            textTwo.innerHTML = "An unknown error occurred."
            break;
    }
}

//    Example Three
const textThree = document.getElementById("textThree");

function getLocationThree() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPositionThree);
    } else {
        textThree.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPositionThree(position) {
    textThree.innerHTML = "Latitude: " + position.coords.latitude +

        "<br>Longitude: " + position.coords.longitude;
}

//    Show Position Example Four
let mapholder = document.getElementById("mapholder")

function showPositionFour(position) {
    let latlon = position.coords.latitude + "," + position.coords.longitude;

    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

    mapholder.innerHTML = "<img src='" + img_url + "'>";
}