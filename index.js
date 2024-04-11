'use strict';

let choice, 
computer,
player,
results;

let computerTally = 0;
let playerTally = 0;
console.log(`Computer: ${computerTally} player: ${playerTally}`);

function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

function getPlayerChoice() {
    choice = parseInt(prompt(`Rock, paper or scissors? Choose '1' for rock, '2' for paper or '3' for scissors.`));
    console.log(choice);
    return choice;
}

function playRound(playerSelection, computerSelection) {

    //Tie:
    if (playerSelection == computerSelection) {
        computerTally++;
        playerTally++;
        return 'tie';
    }
    //Rock:
    else if (playerSelection == 1) {
        if (computerSelection == 2) {
            computerTally++;
            return 'You lose! Paper beats rock!';
        }
        else {
            playerTally++;
            return 'You win! Rock beats scissors!';
        }
    }
    //Paper:
    else if (playerSelection == 2) {
        if (computerSelection == 1) {
            playerTally++;
            return 'You win! Paper beats rock!';
        }
        else {
            computerTally++;
            return 'You lose! Scissors beat paper!';
        }
    }
    //Scissors:
    else {
        if (computerSelection == 1) {
            computerTally++;
            return 'You lose! Rock beats scissors!';
        }
        else {
            computerTally++;
            return 'You win! Scissors beat paper!';
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        player = getPlayerChoice();
        computer = getComputerChoice();
        results = playRound(player, computer);
        console.log(results);
    }
    console.log(`computer: ${computerTally}`);
    console.log(`player: ${playerTally}`);
    if (computerTally > playerTally) {
        console.log('You lose! Computer wins!');
    }
    else if (computerTally < playerTally) {
        console.log('You win! Computer loses!');
    }
    else {
        console.log(`It's a tie!`);
    }
}
    

// player = getPlayerChoice();
// computer = getComputerChoice();
// console.log(`player = ${player}`);
// console.log(`computer = ${computer}`);
// results = playRound(player, computer);
// console.log(results);
playGame();