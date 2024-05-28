function getComputerChoice() {
    const n = Math.floor(1000 * Math.random()) % 3;
    switch(n) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Enter your choice: ");
    switch(choice.toLowerCase()) {
        case "rock": return "rock";
        case "paper": return "paper";
        case "scissors": return "scissors";
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    if(humanChoice === computerChoice) {console.log(`It's a tie! ${capitalize(humanChoice)} ties with ${capitalize(computerChoice)}`); return;}
    else if(humanChoice === "rock" && computerChoice === "paper") {console.log("You lose! Paper beats Rock"); return "c"}
    else if(humanChoice === "rock" && computerChoice === "scissors") {console.log("You win! Rock beats scissors"); return "h"}
    else if(humanChoice === "paper" && computerChoice === "rock") {console.log("You win! Paper beats Rock"); return "h"}
    else if(humanChoice === "paper" && computerChoice === "scissors") {console.log("You lose! Scissors beats Paper"); return "c"}
    else if(humanChoice === "scissors" && computerChoice === "rock") {console.log("You lose! Rock beats scissors"); return "c"}
    else if(humanChoice === "scissors" && computerChoice === "paper") {console.log("You win! Scissors beats Paper"); return "h"}
}

function playGame() {
    let humanScore = 0, computerScore = 0;
    while(humanScore !== 5 && computerScore !== 5) {
        if(playRound() === "c") computerScore++;
        else humanScore++;
        console.log(`Score:\nYou - ${humanScore}\tComputer - ${computerScore}`);
    }
}

playGame();