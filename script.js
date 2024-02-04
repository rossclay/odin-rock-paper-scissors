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