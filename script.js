function getComputerChoice() {
    const options = ["PEDRA","PAPEL","TESOURA"];
    let index;
    index = Math.floor(Math.random() * options.length);
    return options[index];
}

function playMatch(playerChoice, computerChoice) {
    switch (true) {
        case (playerChoice == computerChoice):
            return ("EMPATE");
        case (playerChoice == "PAPEL" && computerChoice == "TESOURA"):
        case (playerChoice == "TESOURA" && computerChoice == "PEDRA"):
        case (playerChoice == "PEDRA" && computerChoice == "PAPEL"):
            return (`DERROTA! Infelizmente, a sua escolha ${playerChoice} perdeu para ${computerChoice}`);
        default:
            return (`VITORIA! Felizmente, a sua escolha ${playerChoice} ganhou de ${computerChoice}`);
    }
}

function game() {
    let playerScore = 0;
    let npcScore = 0;

    let playerChoice;
    let computerChoice;
    computerChoice = getComputerChoice();

    let msgRound;
    while (npcScore < 5 && playerScore < 5) {
        playerChoice = prompt("Escolha sua jogada:").toUpperCase();
        msgRound = playMatch(playerChoice, computerChoice);
        switch (msgRound[0]) {
            case "V":
                playerScore++;
                break;
            case "D":
                npcScore++;
                break;
            default:
                break;
        };
        console.log(msgRound);
    };
    if (playerScore > npcScore) {
        console.log("Você venceu a partida!");
    }
    else {
        console.log("Você perdeu a partida!");
    }
    console.log(`O placar final foi de ${playerScore} X ${npcScore}`);
}
