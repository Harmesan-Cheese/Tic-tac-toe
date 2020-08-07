const prompt = require('prompt-sync')({sigint: true});

let posistions = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
console.log(`|     |     |     |\n|  ${posistions[0]}  |  ${posistions[1]}  |  ${posistions[2]}  |\n|_____|_____|_____|\n|     |     |     |\n|  ${posistions[3]}  |  ${posistions[4]}  |  ${posistions[5]}  |\n|_____|_____|_____|\n|     |     |     |\n|  ${posistions[6]}  |  ${posistions[7]}  |  ${posistions[8]}  |\n|_____|_____|_____|`);

while ( !(posistions[0] == "X" && posistions[1] == "X" && posistions[2] == "X" || posistions[0] == "X" && posistions[3] == "X" && posistions[6] == "X" || posistions[1] == "X" && posistions[4] == "X" && posistions[7] == "X" || posistions[3] == "X" && posistions[5] == "X" && posistions[8] == "X" || posistions[3] == "X" && posistions[4] == "X" && posistions[5] == "X" || posistions[6] == "X" && posistions[7] == "X" && posistions[8] == "X" || posistions[0] == "X" && posistions[4] == "X" && posistions[8] == "X" || posistions[2] == "X" && posistions[4] == "X" && posistions[6] == "X" || posistions[0] == "O" && posistions[1] == "O" && posistions[2] == "O" || posistions[0] == "O" && posistions[3] == "O" && posistions[6] == "O" || posistions[1] == "O" && posistions[4] == "O" && posistions[7] == "O" || posistions[3] == "O" && posistions[5] == "O" && posistions[8] == "O" || posistions[3] == "O" && posistions[4] == "O" && posistions[5] == "O" || posistions[6] == "O" && posistions[7] == "O" && posistions[8] == "O" || posistions[0] == "O" && posistions[4] == "O" && posistions[8] == "O" || posistions[2] == "O" && posistions[4] == "O" && posistions[6] == "O") ) {
    let posistion = prompt('Where do you wanna place your X? ');

    if (posistions[posistion] == "O") {
        console.log("You can't do that");
        posistion = prompt('Where do you wanna place your X? ');
    }
    else {
        posistions[Number(posistion)] = "X";
        console.log(`|     |     |     |\n|  ${posistions[0]}  |  ${posistions[1]}  |  ${posistions[2]}  |\n|_____|_____|_____|\n|     |     |     |\n|  ${posistions[3]}  |  ${posistions[4]}  |  ${posistions[5]}  |\n|_____|_____|_____|\n|     |     |     |\n|  ${posistions[6]}  |  ${posistions[7]}  |  ${posistions[8]}  |\n|_____|_____|_____|`);
    }

    if (posistions[0] !== "0" && posistions[1] !== "1" && posistions[2] !== "2" && posistions[3] !== "3" && posistions[4] !== "4" && posistions[5] !== "5" && posistions[6] !== "6" && posistions[7] !== "7" && posistions[8] !== "8") {
        break;
    }
    else {
        posistion = prompt('Where do you wanna place your O? ');
        if (posistions[posistion] == "X") {
            console.log("You can't do that");
            posistion = prompt('Where do you wanna place your O? ');
        }
        else {
            posistions[Number(posistion)] = "O";
            console.log(`|     |     |     |\n|  ${posistions[0]}  |  ${posistions[1]}  |  ${posistions[2]}  |\n|_____|_____|_____|\n|     |     |     |\n|  ${posistions[3]}  |  ${posistions[4]}  |  ${posistions[5]}  |\n|_____|_____|_____|\n|     |     |     |\n|  ${posistions[6]}  |  ${posistions[7]}  |  ${posistions[8]}  |\n|_____|_____|_____|`);
        }
    }
}

if (posistions[0] == "X" && posistions[1] == "X" && posistions[2] == "X" || posistions[0] == "X" && posistions[3] == "X" && posistions[6] == "X" || posistions[1] == "X" && posistions[4] == "X" && posistions[7] == "X" || posistions[3] == "X" && posistions[5] == "X" && posistions[8] == "X" || posistions[3] == "X" && posistions[4] == "X" && posistions[5] == "X" || posistions[6] == "X" && posistions[7] == "X" && posistions[8] == "X" || posistions[0] == "X" && posistions[4] == "X" && posistions[8] == "X" || posistions[2] == "X" && posistions[4] == "X" && posistions[6] == "X") {
    console.log("X won!!!"); 
}
else if (posistions[0] == "O" && posistions[1] == "O" && posistions[2] == "O" || posistions[0] == "O" && posistions[3] == "O" && posistions[6] == "O" || posistions[1] == "O" && posistions[4] == "O" && posistions[7] == "O" || posistions[3] == "O" && posistions[5] == "O" && posistions[8] == "O" || posistions[3] == "O" && posistions[4] == "O" && posistions[5] == "O" || posistions[6] == "O" && posistions[7] == "O" && posistions[8] == "O" || posistions[0] == "O" && posistions[4] == "O" && posistions[8] == "O" || posistions[2] == "O" && posistions[4] == "O" && posistions[6] == "O"){
    console.log("O won!!!")
}
else {
    console.log("It's a draw")
}
