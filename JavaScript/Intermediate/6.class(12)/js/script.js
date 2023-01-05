class Sports {
    constructor(name, player) {
        this.name = name;
        this.player = player;
    }
}
let Sport = new Sports("Cricket", 11);

document.getElementById('list').innerHTML = "Sports Name" + Sport.name + "<br>" + "Total Player: " + Sport.player;