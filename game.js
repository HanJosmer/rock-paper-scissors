// Title: Rock, Paper, Scissors
// Author: John Hosmer

function computerPlay() {
    let randNum = Math.random();
    let play = null;
    if (randNum <= 0.33333) {
        play = "rock";
    } else if (randNum > 0.33333 && randNum <= 0.67777) {
        play = "paper";
    } else {
        play = "scissors";
    }
    return play;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        switch (computerSelection) {
            case "rock":
                return "You tied :|";
            case "paper":
                return "You lose :(";
            case "scissors":
                return "You win :)";
            default:
                return "Somehow, you managed to break this game.";
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        switch (computerSelection) {
            case "rock":
                return "You win :)";
            case "paper":
                return "You tied :|";
            case "scissors":
                return "You lose :(";
            default:
                return "Somehow, you managed to break this game";
        }
    } else {
        switch (computerSelection) {
            case "rock":
                return "You lose :(";
            case "paper":
                return "You win :)";
            case "scissors":
                return "You tied :|";
            default:
                return "Somehow, you managed to break this game.";
        }
    }
}

// const playerSelection = "scissors";
// const computerSelection = computerPlay();
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));