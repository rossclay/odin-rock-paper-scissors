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

// determine a winner
function getRoundStatus(playerSelection, computerSelection) {
    // losing scenarios
    if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        let roundStatus = 'Lose'
        return roundStatus
    }
    else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        let roundStatus = 'Lose'
        return roundStatus
    }
    else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        let roundStatus = 'Lose'
        return roundStatus
    }
    // winning scenarios
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        let roundStatus = 'Win'
        return roundStatus
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        let roundStatus = 'Win'
        return roundStatus
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        let roundStatus = 'Win'
        return roundStatus
    }
    // tie
    else if (computerSelection === playerSelection) {
        let roundStatus = 'Tied'
        return roundStatus
    }
}

function playRound(playerSelection = getPlayerChoice(), computerSelection = getComputerChoice()) {
    let playRoundStatus = getRoundStatus(playerSelection, computerSelection)
    let gameMessage = `You ${playRoundStatus}! You chose ${playerSelection}, but the computer chose ${computerSelection}.`
    console.log(gameMessage)
    return playRoundStatus
}

// play a game (which is five rounds)
function playGame() {
    let wins = 0
    let losses = 0
    let ties = 0
    for (let i = 0; i < 5; i++) {
        let gameStatus = playRound()
        // keep score
        if (gameStatus === 'Win') {
            wins++
        }
        else if (gameStatus === 'Lose') {
            losses++
        } else if (gameStatus === 'Tied') {
            ties++
        }
        let recordMessage = `Your record is ${wins}-${losses}-${ties}.`
        console.log(recordMessage)
    }
    if (wins < losses) {
        console.log('The computer has defeated you.')
    }
    else if (wins > losses) {
        console.log('You have conquered the computer!')
    }
}