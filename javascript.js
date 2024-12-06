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

function playRound(humanChoice, computerChoice){
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
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
    }

    console.log("Final Score:");
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("It's a tie! Great match.");
    }
}

playGame();