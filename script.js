const scsBtn = document.querySelector("#scissors");
const rckBtn = document.querySelector('div>button#rock');
const prpBtn = document.querySelector("#paper");

let playerScore = 0;
let computerScore = 0;

const choiceEmoji = {
    "PEDRA": "🪨",
    "TESOURA": "✂️",
    "PAPEL": "📄",
}

rckBtn.addEventListener("click", () => game("PEDRA"));
prpBtn.addEventListener("click", () => game("PAPEL"));
scsBtn.addEventListener("click", () => game("TESOURA"));

function getComputerChoice() {
    const options = ["PEDRA","PAPEL","TESOURA"];
    let index;
    index = Math.floor(Math.random() * options.length);
    return options[index];
}

function playMatch(playerChoice, computerChoice) {
    switch (true) {
        case (playerChoice == computerChoice):
            return [("IT'S A DRAW!"),"E"];
        case (playerChoice == "PAPEL" && computerChoice == "TESOURA"):
        case (playerChoice == "TESOURA" && computerChoice == "PEDRA"):
        case (playerChoice == "PEDRA" && computerChoice == "PAPEL"):
            return [(`DEFEAT! Unfortunately your ${playerChoice} lost to your enemy's ${computerChoice} might!`),"V"];
        default:
            return [(`VICTORY! Fortunatly, your ${playerChoice} won over your opponent's ${computerChoice}`),"D"];
    }
}


function game(playerChoice) { 
    let computerChoice = getComputerChoice();
    let msgRound = playMatch(playerChoice,computerChoice);
    
    updatePickDisplay(playerChoice,computerChoice);

    switch (msgRound[1]) {
        case "V":
            playerScore ++; 
            updateScore("Player");
            updateMsg(msgRound[0])
            break;
        case "D":
            computerScore ++;
            updateScore("Computer");
            updateMsg(msgRound[0])
            break;
        default:
            updateMsg(msgRound[0])
            break;
    }
    if (playerScore >= 5) {
        endMatch("Player");
    }
    if (computerScore >= 5) {
        endMatch("Computer");
    }
}

const msgDisplay = document.querySelector("#message");

function updateMsg(newMsg) {
   msgDisplay.textContent = newMsg; 
}

const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");

function updatePickDisplay(playerPick, computerPick) {
    playerChoice.textContent = choiceEmoji[playerPick];
    computerChoice.textContent = choiceEmoji[computerPick];
}

const playerDisplay = document.querySelector("#playerScore");
const computerDisplay = document.querySelector("#pcScore");

function updateScore(winner) {
    console.log(winner);
    switch (winner) {
        case "Player":
            playerDisplay.textContent = `Player: ${playerScore}`;
            break;
        case "Computer":
            computerDisplay.textContent = `Computer: ${computerScore}`;
            break;
        default:
            playerDisplay.textContent = "Player: 0";
            computerDisplay.textContent = "Computer: 0";
            break;
    } 
}

function endMatch(winner) {
    msgDisplay.textContent = `THE ${winner} WINS!`;
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
