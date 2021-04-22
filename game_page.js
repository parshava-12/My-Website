player1_name = localStorage.getItem("player 1");
player2_name = localStorage.getItem("player 2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_name").innerHTML = player1_name +":";
document.getElementById("player_2_name").innerHTML = player2_name +":";

document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_2_score").innerHTML = player2_score;

document.getElementById("question").innerHTML = "Question Turn - "+ player1_name;
document.getElementById("answer").innerHTML = "Answer Turn - "+ player2_name;