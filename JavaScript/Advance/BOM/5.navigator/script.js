let textOne = document.querySelector('#textOne');

function Display() {
    return (
        textOne.innerHTML =
        `
        <p>--> Windows Navigator: ${window.navigator}</p>
        <p>-->  CookieEnabled: ${navigator.cookieEnabled}</p>
        <p>--> Navigator Language: ${navigator.language}</p>
        <p>--> Navigator userAgent: ${navigator.userAgent}</p>
        <p>--> Navigator onLine: ${navigator.onLine}</p>
        <p>--> Some of the navigation does not work for seecurity reasons like</p>
        <p>--> Navigator JavaEnabled: ${navigator.javaEnabled}</p>
        <p>--> Navigator Platform: ${navigator.platform}</p>
        <p>--> Navigator appVersion: ${navigator.appVersion}</p>
        <p>--> Navigator Product: ${navigator.product}</p>
        <p>--> Navigator appCodeName: ${navigator.appCodeName}</p>
        <p>--> Navigator appName: ${navigator.appName}</p>
        <p>--> and many others...</p>
        

        `
    );
}