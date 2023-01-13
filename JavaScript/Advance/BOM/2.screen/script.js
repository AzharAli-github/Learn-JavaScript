let textOne = document.getElementById('textOne');
let button = document.getElementById('button');

button.addEventListener("click", () => {
    return (
        textOne.innerHTML = `
    <p>Windows Screen: ${window.screen}</p>
    <p>Windows Screen: ${screen.height}</p>
    <p>Windows Screen: ${screen.width}</p>
    <p>Available Screen Width: ${screen.availWidth}</p>
    <p>Available Screen Height: ${screen.availHeight}</p>
    <p>Screen Color Depth: ${screen.colorDepth}</p>
    <p>Screen Pixel Depth: ${screen.pixelDepth}</p>
    `)
})