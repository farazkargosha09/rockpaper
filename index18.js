
let userScore = 0;
let cpuScore = 0;

const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Get a random choice for the CPU
function getCPUchoice() {
    const choices = ["Rock", "Paper", "Scissors"];

    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

// When the user wins
function win(userChoice, cpuChoice) {
    userScore++;

    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;

    result_div.innerHTML =
        `${userChoice} beats ${cpuChoice}. You win!`;
}

// When the user loses
function lose(userChoice, cpuChoice) {
    cpuScore++;

    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;

    result_div.innerHTML =
        `${cpuChoice} beats ${userChoice}. You lose!`;
}

// When the game is a draw
function draw(userChoice, cpuChoice) {
    result_div.innerHTML = "It's a draw, partner.";
}

// Game logic
function game(userChoice) {
    const cpuChoice = getCPUchoice();

    switch (userChoice + cpuChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, cpuChoice);
            break;

        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, cpuChoice);
            break;

        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, cpuChoice);
            break;
    }
}

// Set up click interactions
function main() {
    rock_div.addEventListener("click", function() {
        game("Rock");
    });

    paper_div.addEventListener("click", function() {
        game("Paper");
    });

    scissors_div.addEventListener("click", function() {
        game("Scissors");
    });
}

// Start the game
main();
