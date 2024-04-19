'use strict';

let computer,
player,
result;
let computerTally = 0;
let playerTally = 0;

//Styling Elements:
const BORDER_STYLE = '3px solid rgb(0, 0, 0)';
const BORDER_RADIUS = '10%';
const BOX_SHADOW = '3px 3px 3px 3px rgb(0, 0, 0)';
const FONT_SIZE = '2.4rem';

//Score:
let computerScore = document.createElement('h3');
let playerScore = document.createElement('p');
let scoreMessage = document.createElement('p');
computerScore.textContent = `Computer: ${computerTally}`;
playerScore.textContent = `Player: ${playerTally}`;
scoreMessage.style.paddingBottom = '1%';

//Results Div:
const resultsDiv = document.createElement('div');
resultsDiv.id = 'results';
resultsDiv.style.alignItems = 'center';
resultsDiv.style.border = BORDER_STYLE;
resultsDiv.style.borderRadius = BORDER_RADIUS;
resultsDiv.style.boxShadow = BOX_SHADOW;
resultsDiv.style.display = 'flex';
resultsDiv.style.fontSize = FONT_SIZE;
resultsDiv.style.flexFlow = 'column nowrap';
resultsDiv.style.height = '30vh';
resultsDiv.style.justifyContent = 'center';
resultsDiv.style.margin = '0 auto';
resultsDiv.style.textAlign = 'center';
resultsDiv.style.width = '80%';

resultsDiv.append(computerScore, playerScore, scoreMessage);

//Buttons:
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

rock.textContent = 'rock';
paper.textContent = 'paper';
scissors.textContent = 'scissors';

rock.className = 'game-button';
paper.className = 'game-button';
scissors.className = 'game-button';

rock.style.backgroundColor = 'rgb(100 200 250 / 75%)';
paper.style.backgroundColor = 'rgb(255, 255, 255)';
scissors.style.backgroundColor = 'rgb(255, 0, 0)';

rock.addEventListener('click', clickHandler);
paper.addEventListener('click', clickHandler);
scissors.addEventListener('click', clickHandler);

//Container:
const gameContainer = document.createElement('div');
gameContainer.id = 'container';
gameContainer.style.alignItems = 'center';
gameContainer.style.backgroundColor = 'rgb(0 0 0 / 35%)';
gameContainer.style.border = BORDER_STYLE;
gameContainer.style.borderRadius = BORDER_RADIUS;
gameContainer.style.boxShadow = BOX_SHADOW;
gameContainer.style.color = 'rgb(255, 255, 255)';
gameContainer.style.display = 'flex';
gameContainer.style.flexFlow = 'row wrap';
gameContainer.style.fontSize = FONT_SIZE;
gameContainer.style.gap = '1rem';
gameContainer.style.height = '97vh';
gameContainer.style.justifyContent = 'center';
gameContainer.style.width = '97%';

//Build gameContainer:
gameContainer.append(resultsDiv, rock, paper, scissors);

//Attach to Body:
const gameBody = document.querySelector('body');
gameBody.appendChild(gameContainer);

let myButtons = document.querySelectorAll('.game-button');
for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].style.border = BORDER_STYLE;
    myButtons[i].style.borderRadius = BORDER_RADIUS;
    myButtons[i].style.boxShadow = BOX_SHADOW;
    myButtons[i].style.fontSize = '2.4rem';
    myButtons[i].style.height = '15rem';
    myButtons[i].style.width = '25rem';
}

/*--------------------Functions:----------------------- */

function clickHandler(e) {
    computer = getComputerChoice();
    player = e.target.textContent;
    result = playRound(player, computer);
    updateScoreMessage(result);
    updateScore();
}

function getComputerChoice() {
    let randoChoice = Math.floor(Math.random() * 3 + 1);
    if (randoChoice === 1) {
        randoChoice = 'rock';
    }
    else if (randoChoice === 2) {
        randoChoice = 'paper';
    } else {
        randoChoice = 'scissors';
    }
    return randoChoice;
}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         player = getPlayerChoice();
//         computer = getComputerChoice();
//         results = playRound(player, computer);
//         console.log(results);
//     }
//     console.log(`computer: ${computerTally}`);
//     console.log(`player: ${playerTally}`);
//     if (computerTally > playerTally) {
//         return ('You lose! Computer wins!');
//     }
//     else if (computerTally < playerTally) {
//         return ('You win! Computer loses!');
//     }
//     else {
//         return (`It's a tie!`);
//     }
// }

function playRound(playerSelection, computerSelection) {

    //Tie:
    if (playerSelection == computerSelection) {
        new Audio('tie.mp3').play();
        return 'tie';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerTally++;
        computerScore.textContent = `Computer:  ${computerTally}`;
        new Audio('lose.mp3').play();
        return 'You lose! Paper beats rock!';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerTally++;
        playerScore.textContent = `Player:  ${playerTally}`;
        new Audio('win.mp3').play();
        return 'You win! Rock beats scissors!';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerTally++;
        playerScore.textContent = `Player:  ${playerTally}`;
        new Audio('win.mp3').play();
        return 'You win! Paper beats rock!';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerTally++;
        computerScore.textContent = `Computer:  ${computerTally}`;
        new Audio('lose.mp3').play();
        return 'You lose! Scissors beat paper!';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerTally++;
        computerScore.textContent = `Computer:  ${computerTally}`;
        new Audio('lose.mp3').play();
        return 'You lose! Rock beats scissors!';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerTally++;
        playerScore.textContent = `Player:  ${playerTally}`;
        new Audio('win.mp3').play();
        return 'You win! Scissors beat paper!';
    }
}

function updateScore() {
    if (playerTally === 5 || computerTally === 5) {   
        if (playerTally > computerTally) {
            new Audio('victory.mp3').play();
            setTimeout(() => {
                alert('Player reached 5 points, player wins the game!');
                location.reload();
            }, 1000);
        }
        else {
            new Audio('failure.mp3').play();
            setTimeout(() => {
                alert('Computer reached 5 points, computer wins the game!');
                location.reload();
            }, 1000);
        }
    }
}

function updateScoreMessage(message) {
    scoreMessage.textContent = message;
}