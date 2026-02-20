const gameBtn = document.getElementById("gameBtn");
const drawnF = document.getElementById("Drawn");
const ScoreF = document.getElementById("Score");
const loseF = document.getElementById("lose");
const icons1 = document.querySelector(".fa-sun");
const btn = document.querySelector(".iconBtn");


gameBtn.addEventListener("click", () => {
     alert("hello")
    let arr = ["snake", "water", "gun"];
    let score = 0;
    let drawn = 0;
    let Moves = 10;
    let beat = 0;

    while (Moves > 0) {
        // INPUTS

        let UserInput = prompt("First user choice (snake, water, gun)");
        let ComputerInput = arr[Math.floor(Math.random() * arr.length)];

        UserInput = UserInput.toLowerCase().trim();

        // 1️⃣ Check invalid input
        if (!arr.includes(UserInput) || !arr.includes(ComputerInput)) {
            alert("Invalid input!");
            continue;
        }
        // 2️⃣ Check draw
        if (UserInput === ComputerInput) {
            alert("Game was drawn");
            drawn++;
            Moves--;
            continue;
        }

        // 3️⃣ Check winner
        if ((UserInput === "snake" && ComputerInput === "water") || (UserInput === "gun" && ComputerInput === "snake") || (UserInput === "water" && ComputerInput === "gun")) {
            alert(`Hurray You Won The Game ${UserInput} Beats ${ComputerInput}`);
            score++;
        } else {
            alert(`Aww! You Loose ${ComputerInput} Beats ${UserInput}`);
            beat++;
        }
        Moves--;
        drawnF.innerText = drawn;
        ScoreF.innerText = score;
        loseF.innerText = beat;
    }

});



