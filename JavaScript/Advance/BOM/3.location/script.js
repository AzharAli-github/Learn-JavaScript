let textOne = document.getElementById('textOne');

function Display() {
    textOne.innerHTML = `
    <p>Window Location: ${window.location}</p>
    <p>Window Location Href: ${window.location.href}</p>
    <p>Window Location HostName: ${window.location.hostname}</p>
    <p>Window Location Path Name: ${window.location.pathname}</p>
    <p>Window Location Protocol: ${window.location.protocol}</p>
    <p>Refresh thr page....</p>
`
}