function getComputerChoice(){
    let choice = Math.random();
    if(choice < 0.33){choice = "rock";}
    else if(choice < 0.66){choice = "paper";}
    else{choice = "scissors";}
    return choice;
}

function getHumanChoice(){
    let choice = prompt("What's your choice?").toLowerCase();
    if (["rock", "paper", "scissors"].includes(choice)) {
        return choice;
    } else {
        console.log("Invalid input! Please choose rock, paper, or scissors.");
        return getHumanChoice();
    }
}

let humanScore = 0, computerScore = 0;

const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

function playRound(humanChoice, computerChoice){
    let resultMessage = "";
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("It's a tie! Both chose rock.");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("It's a tie! Both chose paper.");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a tie! Both chose scissors.");
    } else {
        console.log("Invalid choice! Please choose rock, paper, or scissors.");
    }

    resultDiv.innerHTML = `
    <p>${resultMessage}</p>
    <p>Human Score: ${humanScore}, Computer Score: ${computerScore}</p>
    `;

    checkWinner();
}

function checkWinner() {
    if (humanScore === 5) {
        resultDiv.innerHTML += "<p>Congratulations! You win the game!</p>";
        disableButtons();
    } else if (computerScore === 5) {
        resultDiv.innerHTML += "<p>Sorry, you lost the game. Better luck next time!</p>";
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);