const scsBtn = document.querySelector("#scissors");
const rckBtn = document.querySelector('div>button#rock');
const prpBtn = document.querySelector("#paper");

rckBtn.addEventListener("click", game("PEDRA"));
prpBtn.addEventListener("click", game("PAPEL"));
scsBtn.addEventListener("click", game("TESOURA"));

function getComputerChoice() {
    const options = ["PEDRA","PAPEL","TESOURA"];
    let index;
    index = Math.floor(Math.random() * options.length);
    return options[index];
}

function playMatch(playerChoice, computerChoice) {
    switch (true) {
        case (playerChoice == computerChoice):
            return [("EMPATE"),"E"];
        case (playerChoice == "PAPEL" && computerChoice == "TESOURA"):
        case (playerChoice == "TESOURA" && computerChoice == "PEDRA"):
        case (playerChoice == "PEDRA" && computerChoice == "PAPEL"):
            return [(`DERROTA! Infelizmente, a sua escolha ${playerChoice} perdeu para ${computerChoice}`),"V"];
        default:
            return [(`VITORIA! Felizmente, a sua escolha ${playerChoice} ganhou de ${computerChoice}`),"D"];
    }
}

let playerScore;
let computerScore;

function game(playerChoice) {
    let playerChoice;
    let computerChoice = getComputerChoice();

    let msgRound = playMatch(playerChoice,computerChoice);
    
    switch (msgRound[2]) {
        case "V":
            playerScore ++; 
            updateScore("Player");
            break;
        case "D":
            computerScore ++;
            updateScore("Computer");
            break;
        default:
            break;
    }
    if (playerScore > 5) {
        endMatch("Player");
    }
    if (computerScore > 5) {
        endMatch("Computer");
    }
}

const playerDisplay = document.querySelector("#playerScore");
const computerDisplay = document.querySelector("pcScore");

function updateScore(winner) {
    switch (winner) {
        case "Player":
            playerDisplay.textContent = `Player: ${playerScore}`;
            break;
        case "Computer":
            computerScore.textContent = `Computer: ${computerScore}`;
            break;
        default:
            playerDisplay.textContent = "Player: 0";
            computerScore.textContent = "Computer: 0";
            break;
    } 
}

function endMatch(winner) {
    switch (winner) {
        case "Player":

            break;
        case "Computer":

            break;
        default:
            break;
    } 
    playerScore = 0;
    computerScore = 0;
    updateScore("reset");
}

//function game() {
//    let playerScore = 0;
//    let npcScore = 0;
//
//    let playerChoice;
//    let computerChoice;
//    computerChoice = getComputerChoice();
//
//    let msgRound;
//    while (npcScore < 5 && playerScore < 5) {
//        msgRound = playMatch(playerChoice, computerChoice);
//        switch (msgRound[0]) {
//            case "V":
//                playerScore++;
//                break;
//            case "D":
//                npcScore++;
//                break;
//            default:
//                break;
//        };
//        console.log(msgRound);
//    };
//    if (playerScore > npcScore) {
//        console.log("Você venceu a partida!");
//    }
//    else {
//        console.log("Você perdeu a partida!");
//    }
//    console.log(`O placar final foi de ${playerScore} X ${npcScore}`);
//}
