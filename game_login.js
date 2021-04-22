function login()
{
    player_1 = document.getElementById("player_1_login_name").value;
    player_2 = document.getElementById("player_2_login_name").value;

    localStorage.setItem("player 1",player_1);
    localStorage.setItem("player 2",player_2);

    window.location = "game_page.html";
}