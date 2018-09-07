// Title: Rock, Paper, Scissors
// Author: John Hosmer

let wins = 0;
let ties = 0;
let losses = 0;

let elGamesPlayed = document.querySelector('#games-played');
let elPlayerScore = document.querySelector('#player-score');
let elComputerScore = document.querySelector('#computer-score');
let elDraws = document.querySelector('#draws');
let optionsList = document.querySelectorAll('.options');
let elRestartGame = document.querySelector('#restart-game');
let elQuitGame = document.querySelector('#quit-game');

elPlayerScore.textContent = 0;
elComputerScore.textContent = 0;
elDraws.textContent = 0;
elGamesPlayed.textContent = 0;

optionsList.forEach((option) => {
    option.addEventListener('click', (e) => {
        playRound(e.target.textContent.toLowerCase(), computerPlay());
        elPlayerScore.textContent = wins;
        elComputerScore.textContent = losses;
        elDraws.textContent = ties;
        elGamesPlayed.textContent = wins + ties + losses;
    });
});

elRestartGame.addEventListener('click', function() {
    alert(`Final Score:\n    Player: ${wins}\n    Computer: ${losses}\n    Ties: ${ties}`);
    elGamesPlayed.textContent = 0;
    wins = 0; elPlayerScore.textContent = wins;
    ties = 0; elDraws.textContent = ties;
    losses = 0; elComputerScore.textContent = ties;
});

elQuitGame.addEventListener('click', function () {
    alert(`Final Score: Player: ${wins} Computer: ${losses} Ties: ${ties}`);
    close();
});

// playGame();

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
                return losses += 1;
            case "paper":
                return ties += 1;
            case "scissors":
                return wins += 1;
            default:
                return "Somehow, you managed to break this game.";
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        switch (computerSelection) {
            case "rock":
                return wins += 1;
            case "paper":
                return ties += 1;
            case "scissors":
                return losses += 1;
            default:
                return "Somehow, you managed to break this game";
        }
    } else {
        switch (computerSelection) {
            case "rock":
                return losses += 1;
            case "paper":
                return wins += 1;
            case "scissors":
                return ties += 1;
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

function playGame() {

    // initialize the scoreboard
    elPlayerScore.textContent = 0;
    elComputerScore.textContent = 0;

    // Play five rounds
    score();
    score();
    score();
    score();
    score();
    console.log(finalScore(wins, losses));
}