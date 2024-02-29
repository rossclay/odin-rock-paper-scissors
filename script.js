// When the user clicks either the fire, water, or grass button
// The computer should randomly choose either fire, water, or grass
// The user's choice should be compared against the computer's
// A winner will be determined based on the following rules:
// Fire beats Grass
// Water beats Fire
// Grass beats Water
// If the choices match, there is a tie
// Inform the user of the result
// If the result is a tie, there must be rematch

// Randomly generate computer's choice
function getComputerChoice() {
    let computerChoice
    let randomnNumber = Math.floor(Math.random() * 3) + 1;
    if (randomnNumber === 1) {
        computerChoice = 'Fire'
    }
    else if (randomnNumber === 2) {
        computerChoice = 'Water'
    }
    else computerChoice = 'Grass'
    // console.log(computerChoice)
    return computerChoice
};
// Determine player choice
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id
    })
})

// determine a winner
function getRoundStatus(playerSelection, computerSelection) {
    // losing scenarios
    if (computerSelection === 'Fire' && playerSelection === 'Grass') {
        let roundStatus = 'Lose'
        return roundStatus
    }
    else if (computerSelection === 'Water' && playerSelection === 'Fire') {
        let roundStatus = 'Lose'
        return roundStatus
    }
    else if (computerSelection === 'Grass' && playerSelection === 'Water') {
        let roundStatus = 'Lose'
        return roundStatus
    }
    // winning scenarios
    else if (playerSelection === 'Fire' && computerSelection === 'Grass') {
        let roundStatus = 'Win'
        return roundStatus
    }
    else if (playerSelection === 'Water' && computerSelection === 'Fire') {
        let roundStatus = 'Win'
        return roundStatus
    }
    else if (playerSelection === 'Grass' && computerSelection === 'Water') {
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
