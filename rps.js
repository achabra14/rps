
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum <= 1.0 / 3.0) {
        return "Rock";
    }
    else if (randomNum <= 2.0 / 3.0) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}


// returns whether p1 wins vs p2 in a h2h
function getWinner(p1Choice, p2Choice) {
    const validChoices = ["Rock", "Paper", "Scissors"];
    
    if (!validChoices.includes(p1Choice)) {
        throw new Error("Invalid choice from p1: " + p1Choice);
    }
    
    if (!validChoices.includes(p2Choice)) {
        throw new Error("Invalid choice from p2: " + p2Choice);
    }

    if (p1Choice == p2Choice)
        return "tie";
    switch (p1Choice) {
        case "Rock":
            return p2Choice == "Scissors" ? "win" : "loss";
        case "Paper":
            return p2Choice == "Rock" ? "win" : "loss";
        case "Scissors":
            return p2Choice == "Paper" ? "win" : "loss";
    }
}

function updateResultsView(lastResultMsg) {
    document.querySelector("#hero-score").textContent = `Hero Score : ${humanScore}`;
    document.querySelector("#bot-score").textContent = `Bot Score : ${computerScore}`;
    document.querySelector("#last-result").textContent = lastResultMsg;
}

function getLastResultMsg(humanChoice, computerChoice, result) {
    switch (result) {
        case "win":
            return `You Win! ${humanChoice} beats ${computerChoice}`;
        case "loss":
            return `You Lose! ${computerChoice} beats ${humanChoice}`;
        case "tie":
            return `You Tie! ${humanChoice} ties ${computerChoice}`;
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    let result = getWinner(humanChoice, computerChoice);

    updateScore(result);
    updateResultsView(getLastResultMsg(humanChoice, computerChoice, result));
    updateIfOverallWinner();
}

function updateIfOverallWinner() {
    function disableButtons() {
        ["Rock", "Paper", "Scissors"].forEach(id => {
            document.getElementById(id).setAttribute('disabled', true);
        });
    }

    if (humanScore == 5) {
        document.querySelector("#overall-result").textContent = "Congrats you won the game!";
        disableButtons();
    }
    else if (computerScore == 5) {
        document.querySelector("#overall-result").textContent = "Sorry you lost the game!";
        disableButtons();
    }
}

function updateScore(humanResult) {
    switch (humanResult) {
        case "win":
            ++humanScore;
            break;
        case "loss":
            ++computerScore;
            break;
        case "tie":
            break;
    }
}

updateResultsView();


buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(btn.id);
    })
});
