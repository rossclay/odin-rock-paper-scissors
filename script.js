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
// NOTE TO SELF: consider adjusting all variables inside the "playRound" function from "game" to "round"

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
function getPlayerChoice() {
    let playerChoice = capitalize(prompt('Please choose either rock, paper, or scissors.'))
    return playerChoice
}
// default parameters for troubleshooting
let playerSelection = 'Rock';
// let gameStatus

// determine a winner
function playRound(playerSelection, computerSelection) {
    let gameMessage = `You ${gameStatus}! You chose ${playerSelection}, but the computer chose ${computerSelection}.`
    let gameStatus = getGameStatus()
    // losing scenarios
    function getGameStatus() {
        if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
            let gameStatus = 'Lose'
            console.log(gameMessage)
            return gameStatus
        }
        else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
            let gameStatus = 'Lose'
            console.log(gameMessage)
            return gameStatus
        }
        else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
            let gameStatus = 'Lose'
            console.log(gameMessage)
            return gameStatus
        }
        // winning scenarios
        else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            let gameStatus = 'Win'
            console.log(gameMessage)
            return gameStatus
        }
        else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            let gameStatus = 'Win'
            console.log(gameMessage)
            return gameStatus
        }
        else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            let gameStatus = 'Win'
            console.log(gameMessage)
            return gameStatus
        }
        // tie
        else if (computerSelection === playerSelection) {
            let gamestatus = 'Tied'
            gameMessage = gameMessage.concat(' Try again.')
            console.log(gameMessage)
        }
        return gameStatus
    }
    return gameStatus
}

// play 5 rounds
function playGame() {
    let i
    let wins = 0
    let losses = 0
    let ties = 0
    let recordMessage = `Your record is ${wins}-${losses}-${ties}.`
    while (i < 5) {
        getPlayerChoice()
        getComputerChoice()
        playRound(playerSelection, computerSelection)
        // keep score
        if (gameStatus === 'Win') {
            wins++
        }
        else if (gameStatus === 'Lose') {
            losses++
        } else if (gameStatus === 'Tied') {
            ties++
        }
        // update score with a message
        i++
        return recordMessage
    }

}