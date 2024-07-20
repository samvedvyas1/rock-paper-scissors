let humanScore = 0, computerScore = 0;

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const container = document.querySelector(".container");

const display = document.createElement("div");
const score = document.createElement("div");
score.classList.add("score");
display.classList.add("display");
container.appendChild(display);
container.appendChild(score);

rock_btn.addEventListener("click", () => {
    const humanChoice = "rock";
    const outcome = getOutcome(humanChoice);
    playGame(outcome, humanChoice);
})

paper_btn.addEventListener("click", () => {
    const humanChoice = "paper";
    const outcome = getOutcome(humanChoice);
    playGame(outcome, humanChoice);
})

scissors_btn.addEventListener("click", () => {
    const humanChoice = "scissors";
    const outcome = getOutcome(humanChoice);
    playGame(outcome, humanChoice);
})

function getComputerChoice() {
    const n = Math.floor(1000 * Math.random()) % 3;
    switch(n) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getOutcome(humanChoice, computerChoice = getComputerChoice()) {
    if(humanChoice === computerChoice) return "t";
    else if(humanChoice === "rock" && computerChoice === "paper") {return "c"}
    else if(humanChoice === "rock" && computerChoice === "scissors") {return "h"}
    else if(humanChoice === "paper" && computerChoice === "rock") {return "h"}
    else if(humanChoice === "paper" && computerChoice === "scissors") {return "c"}
    else if(humanChoice === "scissors" && computerChoice === "rock") {return "c"}
    else if(humanChoice === "scissors" && computerChoice === "paper") {return "h"}
}

function playGame(outcome, humanChoice) {
    if (humanScore === 5 || computerScore === 5) {
        display.textContent = "Game over!";
        return;
    }
    switch (outcome) {
        case "h":
            humanScore += 1;
            break;
        case "c":
            computerScore += 1;
            break;
    }
    if (humanScore !== 5 && computerScore !== 5) {
        if (outcome === "t") {
            display.textContent = `It's a tie! ${capitalize(humanChoice)} ties with ${capitalize(humanChoice)}`;
        }
        else if (outcome === "h") {
            if (humanChoice === "rock") display.textContent = "You win! Rock beats scissors";
            else if (humanChoice === "paper") display.textContent = "You win! Paper beats Rock";
            else display.textContent = "You win! Scissors beats Paper";
        }
        else {
            if (humanChoice === "rock") display.textContent = "You lose! Paper beats Rock";
            else if (humanChoice === "paper") display.textContent = "You lose! Scissors beats Paper";
            else display.textContent = "You lose! Rock beats scissors";
        }
    }
    score.textContent = `You - ${humanScore}\tComputer - ${computerScore}`;
}