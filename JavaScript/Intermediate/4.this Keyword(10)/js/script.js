const person1 = {
    firstName: "Azhar",
    lastName: "Ali"
}

const person2 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

document.getElementById('header').innerHTML = person2.fullName.call(person1);