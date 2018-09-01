// Title: Rock, Paper, Scissors
// Author: John Hosmer

let wins = 0;
let ties = 0;
let losses = 0;

game();

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

function score() {
    let playerSelection = prompt("What will you choose to play?");
    if (playerSelection == null) {
        console.log("You have forfeited this round");
        losses += 1;
        return;
    } else if (playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors") {
        let computerSelection = computerPlay();
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
    } else {
        return score();
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

function game() {

    // Play five rounds
    score();
    score();
    score();
    score();
    score();
    console.log(finalScore(wins, losses));
}