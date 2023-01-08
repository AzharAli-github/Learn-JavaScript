import { person } from "./person";

let para = document.querySelector('#demo');

const message = () => {
    let text = "Hello" + person.firstName + " " + person.lastName + "How are You!" +
        "Are you " + person.age + "years old";
    para.innerHTML = text;
};

export default message;