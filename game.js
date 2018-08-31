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

const playerSelection = "scissors";
const computerSelection = computerPlay();
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let wins = 0;
    let ties = 0;
    let losses = 0;
    function score(playerSelection, computerSelection) {
        let round = playRound(playerSelection, computerSelection);
        console.log(round);
        if (round == "You win :)") {
            wins += 1;
            return;
        }
        else if (round == "You tied :|") {
            ties += 1;
            return;
        }
        else {
            losses += 1;
            return;
        }
    }
    function finalScore(wins, losses) {
        if (wins > losses) {
            return `You won ${wins} out of 5 games.  You sure are good!`;
        } else if (losses > wins) {
            return `You lost ${losses} out of 5 games.  Better luck next time!`;
        }
        else {
            return "I don't know how you did it, but the best of five wound up in a draw!";
        }
    }
    score(playerSelection, computerSelection);
    score(playerSelection, computerSelection);
    score(playerSelection, computerSelection);
    score(playerSelection, computerSelection);
    score(playerSelection, computerSelection);
    console.log(finalScore(wins, losses));
}

game();