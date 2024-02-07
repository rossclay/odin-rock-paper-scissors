// When the user inputs a case insensitive string choosing either rock, paper, or scissors
// The computer should randomly choose either rock, paper, or scissors
// The user's choice should be compared against the computer's
// A winner will be determined based on the following rules
// Rock beats Scissors
// Paper beats Rock
// Scissors beats paper
// If the choices match, there is a tie
// Inform the user of the result
// If the result is a tie, there must be rematch


// Randomly generate computer's choice
function getComputerChoice() {
    let computerChoice
    let randomnNumber = Math.floor(Math.random() * 3) + 1;
    if (randomnNumber === 1) {
        computerChoice = 'Rock'
    }
    else if (randomnNumber === 2) {
        computerChoice = 'Paper'
    }
    else computerChoice = 'Scissors'
    // console.log(computerChoice)
    return computerChoice
};
let computerSelection = getComputerChoice();

// capitalize function to allow for case insensitive input
function capitalize(string) {
    let firstLetter = string.slice(0, 1);
    firstLetter = firstLetter.toUpperCase()
    let restOfString = string.slice(1);
    restOfString = restOfString.toLowerCase()
    return firstLetter + restOfString;
}

// player inputs case insensitive selection
let playerSelection = capitalize(prompt('Please choose either rock, paper, or scissors.'));

// determine a winner
function playARound(computerSelection, playerSelection) {
    let gameStatus
    let gameMessage = `You ${gamestatus}! You chose ${playerSelection}, but the computer chose ${computerSelection}.`
    // losing scenarios
    if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        gameStatus = 'Lose'
        return gameMessage
    }
    else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        gameStatus = 'Lose'
        return gameMessage
    }
    else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        gameStatus = 'Lose'
        return gameMessage
    }
    // winning scenarios
    else if (playererSelection === 'Rock' && computerSelection === 'Scissors') {
        gameStatus = 'Win'
        return gameMessage
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        gameStatus = 'Win'
        return gameMessage
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        gameStatus = 'Win'
        return gameMessage
    }
    // tie
    else if (computerSelection === playerSelection) {
        gamestatus = 'Tied'
        gameMessage = gameMessage.concat(' Try again.')
    } return gameMessage
}

function playGame() {
    while (i < 5) {
        playARound()
        i++
    }
}