function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
    const choices = ["Rock", "Paper", "Scissors"]; // Array of choices

    return choices[randomNumber]; // Returns one of the choices
}

function getHumanChoice() {
    let humanChoice = prompt(
        "Choose Rock, Paper, Scissors"
    ).toUpperCase();
    
    if (
        humanChoice != "ROCK" && 
        humanChoice != "PAPER" && 
        humanChoice != "SCISSORS"
    ) {
        alert(" Invalid choice! Please enter Rock, Paper, or Scissors.")
        return getHumanChoice(); // Ask again for valid choice
    } else {
        return humanChoice[0].toUpperCase() + humanChoice.substring(1);
    }
}



function playGame() {

    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {

        if(humanChoice === computerChoice) {
            console.log("Draw");
        } else if (
                (humanChoice === "Rock" && computerChoice === "Scissors") ||
                (humanChoice === "Paper" && computerChoice === "Rock") ||
                (humanChoice === "Scissors" && computerChoice === "Paper") 
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    // Play 5 rounds
    for(let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
}

playGame();