//    Fetch API Part 2, Fetching From URL
let textOne = document.getElementById('textOne');

function DisplayOne() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            let resp = response;
            textOne.innerHTML = resp;
            console.log(textOne);
        });
}