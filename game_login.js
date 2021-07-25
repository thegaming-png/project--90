function AddUser() {
    var PLayer1_name = document.getElementById("player1_name").value;
    var PLayer2_name = document.getElementById("player2_name").value;
    localStorage.setItem("player1", PLayer1_name);
    localStorage.setItem("player2", PLayer2_name);

    window.location = "game_page.html";
}