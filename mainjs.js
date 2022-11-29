var header = document.getElementById("h1")
var team = window.prompt('which team will win in world cup Qatar');
console.log(team)

switch (team) {
    case "france":
        header.innerHTML = "winner"
        break


    case null:
        header.innerHTML = "again ?";
        break

    case team:
        header.innerHTML = "loser";




}
