function createGame(){
    let turn = 0;
    let actualPlayer = 'X';
    let board = ['-','-','-',
                 '-','-','-',
                '-','-','-'];
    let gameOver = false;
    function updateUI() {
        const boxes = document.getElementsByClassName("box");
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = board[i];
        }
    }
    function handleClick(position) {
        if (board[position] === '-' && !gameOver) {
            board[position] = actualPlayer;
            updateUI();
            turn++;
            const winner = checkWinner({board});
            if(winner){
                console.log("Winner is " + actualPlayer);
                gameOver = true;
            }
            else if(turn == 9){
                console.log("Tie");
                gameOver = true;
            }
            actualPlayer = (actualPlayer === 'X') ? 'O' : 'X';
        } else if (!gameOver){
            console.log("square already used");
        }
        
    }
    const boxes = document.getElementsByClassName("box");

    for(let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("click", function(gameboard){
            handleClick(i);
        });
    }
    return {board, actualPlayer}
}

function checkDiagonals(gameboard){
    let hasWinner = false;
    let winner = undefined;
    // up-left to down-right
    let letter = gameboard.board[0];
    if((letter !== '-') && (letter === gameboard.board[4]) && (letter === gameboard.board[8])){
        hasWinner = true;
        winner = letter;
        return winner;
    }

    // right-up to down-left
    letter = gameboard.board[2];
    if(!hasWinner && (letter !== '-') && (letter === gameboard.board[4]) && (letter === gameboard.board[6])){
        hasWinner = true;
        winner = letter;
    }
    if(hasWinner){
        console.log("diagonal winner:", winner);
    }
    return winner;
}

function checkRows(gameboard){
    let hasWinner = false;
    let winner = undefined;
    for (let i= 0; i < 3 && !hasWinner; i++) {
        let letter = gameboard.board[i*3];
        if((letter !== '-') && (letter === gameboard.board[(i*3) + 1]) && (letter === gameboard.board[(i*3) + 2])){
                hasWinner = true;
                winner = letter;
        }
        
    }
    if(hasWinner){
        console.log("row winner is:", winner);
    }
    return winner;
}

function checkColumns(gameboard){
    let hasWinner = false;
    let winner = undefined;
    for (let i= 0; i < 3 && !hasWinner; i++) {
        let letter = gameboard.board[i];
        if((letter !== '-') && (letter === gameboard.board[i+3]) && (letter === gameboard.board[i+6])){
                hasWinner = true;
                winner = letter;
        }
    }
    if(hasWinner){
        console.log("column winner is:", winner);
    }
    return winner;
}

function checkWinner(gameboard){
    let possibleWinner = undefined;

    possibleWinner = checkColumns(gameboard);
    if(possibleWinner){
        return possibleWinner;
    }

    possibleWinner = checkRows(gameboard);
    if(possibleWinner){
        return possibleWinner;
    }

    possibleWinner = checkDiagonals(gameboard);
    if(possibleWinner){
        return possibleWinner;
    }

    return possibleWinner;
}



const gameboard = createGame();
