let allCards = document.querySelector('.allCards');

let personData = [{
        Name: "Azhar",
        rollNo: 11,
        address: "Ghulkin"
    },
    {
        Name: "Musharaf",
        rollNo: 12,
        address: "Ghulkin"
    },
    {
        Name: "Ahsam",
        rollNo: 13,
        address: "Ghulkin"
    },
    {
        Name: "Masroor",
        rollNo: 14,
        address: "Ghulkin"
    },
];

const personList = personData.map((data) => {
    return `
    <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Roll Number</th>
                    <th>Address</th>
                </tr>
                <tr>
                    <td>${data.Name}</td>
                    <td>${data.rollNo}</td>
                    <td>${data.address}</td>
                </tr>
            </table>
        </div>
    `
});
allCards.innerHTML = personList.join(' ');