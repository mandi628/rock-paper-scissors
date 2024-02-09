function computerChoice(1, 3) {
    return Math.floor(Math.random() * (max - min + 1) + min);
} if (computerChoice = 1) {
    return rock;
} else if (computerChoice === 2) {
    return scissors;
} else {
    return paper;
}

let playerSelection = prompt("Please choose your weapon: (rock, paper, scissors)");

function playerChoice() {
if (playerSelection === "rock") {
    return 1;
} else if (playerSelection === "scissors") {
    return 2;
} else {
    return 3;
}
}

// console.log(playerSelection);

// console.log(playRound(playerSelection, computerChoice));