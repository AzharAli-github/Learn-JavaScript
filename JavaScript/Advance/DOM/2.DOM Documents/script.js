let textOne = document.getElementById('textOne');

function DisplayOne() {
    textOne.innerHTML = `
    <h2>Finding HTML Elements</h2>
    <li>1. document.getElementById('id')</li>
    <li>2. document.getElementByTagName(name)</li>
    <li>3. document.getElementByClassName('name')</li>
    <h2>Changing HTML Elements</h2>
    <li>1. element.innerHTML =  new html content</li>
    <li>2. element.attribute = new value</li>
    <li>3. element.style.property = new style</li>
    <h3>Method</h3>
    <li>4. element.setAttribute(attribute, value)</li>
    <h2>Adding and Deleting HTML Elements</h2>
    <li>1. document.createElement(element)</li>
    <li>2. document.removeChild(element)</li>
    <li>3. document.appendChild(element)</li>
    <li>4. document.replaceChild(new, old)</li>
    <li>5. document.write(text)</li>
    <h1>Adding Events Handlers</h1>
    <li>document.getElementById(id).onclick = function(){code}</li>
    `
}