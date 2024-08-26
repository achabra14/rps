
function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum <= 1.0 / 3.0) {
        return "rock";
    }
    else if (randomNum <= 2.0 / 3.0) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanAction = prompt("Please select your action");

    if (humanAction[0] == 'r') {
        return "rock";
    }
    else if (humanAction[0] == 'p') {
        return "paper";
    }
    else if (humanAction[0] == 's') {
        return "scissors";
    }
    else {
        alert("Invalid action, please enter either r, p or s");
        return getHumanChoice();
    }
}



// returns whether p1 wins vs p2 in a h2h
function getWinner(p1Choice, p2Choice) {
    const validChoices = ["rock", "paper", "scissors"];
    
    if (!validChoices.includes(p1Choice)) {
        throw new Error("Invalid choice from p1: " + p1Choice);
    }
    
    if (!validChoices.includes(p2Choice)) {
        throw new Error("Invalid choice from p2: " + p2Choice);
    }

    if (p1Choice == p2Choice)
        return "tie";
    switch (p1Choice) {
        case "rock":
            return p2Choice == "scissors" ? "win" : "loss";
        case "paper":
            return p2Choice == "rock" ? "win" : "loss";
        case "scissors":
            return p2Choice == "paper" ? "win" : "loss";
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const result = getWinner(humanChoice, computerChoice);
    
        switch (result) {
            case "win":
                console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
                ++humanScore;
                break;
            case "loss":
                console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
                ++computerScore;
                break;
            case "tie":
            console.log(`You Tie! ${humanChoice} ties ${computerChoice}`);
                break;
        }
    }

    for (i = 0; i != 5; ++i) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore)
        console.log(`You Win! ${humanScore} - ${computerScore}`);
    else if (humanScore == computerScore)
        console.log(`Tie!  ${humanScore} - ${computerScore}`);
    else
        console.log(`You Lose!  ${computerScore} - ${humanScore}`);
}

playGame();
