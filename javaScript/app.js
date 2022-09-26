const option = ["rock", "paper", "scissors"];
let player = 0;
let computer = 0;

const score = document.getElementById('score');
score.innerText = `PLAYER SCORE: ${player} | COMPUTER SCORE: ${computer}`;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.innerText.toLowerCase();
        playRound(playerSelection);
    })
})

function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    return option[i];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let win = '';
    // your code here!
    if( playerSelection === "rock" && computerSelection === "scissors"){
        results.innerText = "You Win! Rock beats Scissors";
        win = 'O';
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        results.innerText = "You Lose! Paper beats Rock";
        win = 'X';
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        results.innerText = "You Win! Paper beats Rock";
        win = 'O';
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        results.innerText = "You Lose! Scissors beats Paper";
        win = 'X';
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        results.innerText = "You Win! Scissors beats Paper";
        win = 'O';
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        results.innerText = "You Lose! Rock beats Scissors";
        win = 'X';
    } else {
        results.innerText = `You chose ${playerSelection} and your oppenent chose ${computerSelection}, IT'S A TIE!!!!!`;
        win = 'T';
    }
    keepScore(win);
}

function keepScore(win){
    if (player !== 5 && computer !== 5){
        if(win === 'O'){
            player++;
        } else if (win === 'X'){
            computer++;
        } else if (win === 'T'){
            console.log("Tie");
        }
        score.innerText = `PLAYER SCORE: ${player} | COMPUTER SCORE: ${computer}`;
    } else {
        if (player > computer){
            score.innerText = "Congratulation You Win"
        } else {
            score.innerText = "Sorry, looks like you lose"
        }
    }
    
}


function game(playerSelection, computerSelection) {
    let computer = 0;
    let player = 0;

    let results = playRound(playerSelection, computerSelection);

    for (var i = 0; i < 5; i++) { 

        

        if(results === 'O'){
            player++;
        } else if (results === 'X') {
            computer++;
        }
        console.log(`Player Score: ${player}`);
        console.log(`Computer Score: ${computer}`);
    }

    if (player > computer) {
        console.log("Congratulation, You Win!")
    } else {
        console.log("Sorry, You lose");
    }
}