// was i right to make a seperatendiv for results, score and winning message



function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
    const choices = ["Rock", "Paper", "Scissors"]; // Array of choices

    return choices[randomNumber]; // Returns one of the choices
}



function playGame(humanChoice) {

    let humanScore = 0;
    let computerScore = 0;

    const results = document.createElement("div");
    const score = document.createElement("div");
    const winMsg = document.createElement("div");

    score.style.marginTop = "20px";
    results.style.marginTop = "20px";
    winMsg.style.marginTop = "20px";
    
    
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");

    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";

    document.body.appendChild(rock);
    document.body.appendChild(paper);
    document.body.appendChild(scissors);
    document.body.appendChild(results);
    document.body.appendChild(score);
    document.body.appendChild(winMsg);


    [rock, paper, scissors].forEach(button => {
        button.style.margin = "5px";
        button.style.padding = "10px 15px";
        button.style.fontSize = "16px";
    })
        
    const buttons = [rock, paper, scissors];
    

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let humanChoice = button.textContent;
            let computerSelection = getComputerChoice();
            playRound(humanChoice, computerSelection);
        });
    });
    


    function playRound(humanChoice, computerChoice) {
    
        
        if(humanChoice === computerChoice) {
            results.textContent = "Draw!";
        } else if (
                (humanChoice === "Rock" && computerChoice === "Scissors") ||
                (humanChoice === "Paper" && computerChoice === "Rock") ||
                (humanChoice === "Scissors" && computerChoice === "Paper") 
        ) {
            results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            score.textContent = `Player: ${humanScore} - ${computerScore} :Computer`
            if(humanScore == 5) {
                winMsg.textContent = `Final Score: You ${humanScore} - Computer ${computerScore}`;
                return
            }
            
        } else {
            results.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            score.textContent = `Player: ${humanScore} - ${computerScore} :Computer`;
            if(computerScore == 5) {
                winMsg.textContent = `Final Score: You ${humanScore} - Computer ${computerScore}`;
                return
            }
        }
    }
}

playGame();