let humanScore = 0, computerScore = 0;

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const win = document.querySelector(".win");
const winReason = document.querySelector(".win-reason");
const player_score = document.querySelector(".player-score");
const computer_score = document.querySelector(".computer-score");
const player_icon = document.querySelector(".player-icon");
const computer_icon = document.querySelector(".computer-icon");
const modal = document.querySelector(".modal");
const play_again = document.querySelector(".play-again");
const modal_win = document.querySelector(".modal-win");

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
    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    if(humanChoice === computerChoice) {
        if (humanChoice === "rock") {player_icon.textContent = "✊"; computer_icon.textContent = "✊";}
        else if (humanChoice === "paper") {player_icon.textContent = "✋"; computer_icon.textContent = "✋";}
        else {player_icon.textContent = "✌"; computer_icon.textContent = "✌";}

        return "t";
    }
    else if(humanChoice === "rock" && computerChoice === "paper") {player_icon.textContent = "✊"; computer_icon.textContent = "✋"; return "c"}
    else if(humanChoice === "rock" && computerChoice === "scissors") {player_icon.textContent = "✊"; computer_icon.textContent = "✌"; return "h"}
    else if(humanChoice === "paper" && computerChoice === "rock") {player_icon.textContent = "✋"; computer_icon.textContent = "✊"; return "h"}
    else if(humanChoice === "paper" && computerChoice === "scissors") {player_icon.textContent = "✋"; computer_icon.textContent = "✌"; return "c"}
    else if(humanChoice === "scissors" && computerChoice === "rock") {player_icon.textContent = "✌"; computer_icon.textContent = "✊"; return "c"}
    else if(humanChoice === "scissors" && computerChoice === "paper") {player_icon.textContent = "✌"; computer_icon.textContent = "✋"; return "h"}
}

function playGame(outcome, humanChoice) {
    if (humanScore === 5 || computerScore === 5) return;
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
            win.textContent = `It's a tie!`; 
            winReason.textContent = `${capitalize(humanChoice)} ties with ${capitalize(humanChoice)}`;
        }
        else if (outcome === "h") {
            if (humanChoice === "rock") {win.textContent = "You win!"; winReason.textContent =  "Rock beats scissors";}
            else if (humanChoice === "paper") {win.textContent = "You win!"; winReason.textContent = "Paper beats Rock";}
            else {win.textContent = "You win!"; winReason.textContent =  "Scissors beats Paper";}
        }
        else {
            if (humanChoice === "rock") {win.textContent = "You lose!"; winReason.textContent = "Paper beats Rock";}
            else if (humanChoice === "paper") {win.textContent = "You lose!"; winReason.textContent = "Scissors beats Paper";}
            else {win.textContent = "You lose!"; winReason.textContent =  "Rock beats scissors";}
        }
    }
    player_score.textContent = `Player: ${humanScore}`;
    computer_score.textContent = `Computer: ${computerScore}`;
    
    if (humanScore === 5 || computerScore === 5) {
        win.textContent = "Game over!";
        if (humanScore === 5) {winReason.textContent = `🎉 You Won the Game! 🎉`; modal_win.textContent = "You won!";}
        else {winReason.textContent = `Computer Won the Game! 🤖`; modal_win.textContent = "You lost...";}
        
        modal.style.display = "block";
        play_again.addEventListener("click", () => {
            win.textContent = "Choose your weapon";
            winReason.textContent = "First to score 5 points wins the game";
            player_icon.textContent = computer_icon.textContent = "❔";
            player_score.textContent = "Player: 0";
            computer_score.textContent = "Computer: 0";
            humanScore = 0;
            computerScore = 0;
            modal.style.display = "none";
        })

    }  
}

function restart() {
    humanScore = computerScore = 0;
    win.textContent = "Choose your weapon";
    winReason.textContent = "First to score 5 points wins the game";
}