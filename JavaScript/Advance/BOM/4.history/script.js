let textOne = document.getElementById('textOne');

function Display() {
    return (textOne.innerHTML =
        `
        <p>Windows History: ${window.history}</p>
        <p>History Back: ${history.back()}</p>
        <p>History Forward: ${history.forward()}</p>
        <p>Windows History: ${window.history}</p>
    `)
}