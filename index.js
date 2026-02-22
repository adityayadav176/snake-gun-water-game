const gameBtn = document.getElementById("gameBtn");
const drawnF = document.getElementById("Drawn");
const ScoreF = document.getElementById("Score");
const loseF = document.getElementById("lose");
// const icon = document.querySelector(".icons")
const icon = document.getElementById("themeIcon");
let score = 0;
let drawn = 0;
let Moves = 10;
let beat = 0;


gameBtn.addEventListener("click", () => {
    alert("hello")
    let arr = ["snake", "water", "gun"];

    while (Moves > 0) {
        // INPUTS

        let UserInput = prompt("First user choice (snake, water, gun)");
        let ComputerInput = arr[Math.floor(Math.random() * arr.length)];

        UserInput = UserInput.toLowerCase().trim();

        if (UserInput === null) {
            alert("Game cancelled");
            break;
        }

        // 1️⃣ Check invalid input
        if (!arr.includes(UserInput)) {
            alert("Invalid input! Please enter snake, water or gun.");
            continue;
        }
        // 2️⃣ Check draw
        if (UserInput === ComputerInput) {
            alert("Game was drawn");
            drawn++;
            Moves--;
            drawnF.innerText = drawn;
            ScoreF.innerText = score;
            loseF.innerText = beat;
            continue; // ✅ STOP here if draw
        }
        // 3️⃣ Check winner
        if ((UserInput === "snake" && ComputerInput === "water") || (UserInput === "gun" && ComputerInput === "snake") || (UserInput === "water" && ComputerInput === "gun")) {
            alert(`Hurray You Won The Game ${UserInput} Beats ${ComputerInput}`);
            score++;
            Moves--;
        } else {
            alert(`Aww! You Loose ${ComputerInput} Beats ${UserInput}`);
            beat++;
            Moves--;
        }
        drawnF.innerText = drawn;
        ScoreF.innerText = score;
        loseF.innerText = beat;
    }

});



// icon.addEventListener("click", () => {
//    let Theme =  document.body.classList.toggle("dark")
//     if (Theme) {
//         icon.innerText = "Light"
//     }else{
//         icon.innerText = "Dark"
//     }
// })

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});



