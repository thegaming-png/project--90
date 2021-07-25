// var Player1_name = "";
// var Player2_name = "";
var Player1_score = 0;
var Player2_score = 0;

Player1_name = localStorage.getItem("player1");
Player2_name = localStorage.getItem("player2");




document.getElementById("player1_name").innerHTML = Player1_name + ":";
document.getElementById("player1_score").innerHTML = Player1_score;
document.getElementById("player2_name").innerHTML = Player2_name + ": ";
document.getElementById("player2_score").innerHTML = Player2_score;


document.getElementById("player_question").innerHTML = "Question turn- " + Player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn- " + Player2_name;

function send() {
    getWord = document.getElementById("word").value;
    getWord2 = document.getElementById("word2").value;
    getWord = getWord.toLowerCase();
    getWord2 = getWord2.toLowerCase();
    console.log(getWord)
    finalWord = getWord + " X " + getWord2
    document.getElementById("output").innerHTML = finalWord;


    var quesitionword = "<h4 id='word_display'>Q. " + finalWord + "</h4>";
    var input_box = "<br> Answer: <input type='text' id='input_check_box'>";
    var check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    console.log("Hi")
    row = quesitionword + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}


var question_turn = "player1";
var answer_turn = "player2";