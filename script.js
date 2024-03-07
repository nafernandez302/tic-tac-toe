function createGame(){
    let turn = 0;
    let actualPlayer = 'X';
    let board = ['-','-','-',
                 '-','-','-',
                '-','-','-'];
    const addTurn = () => {
        turn++;
        if(actualPlayer === 'X'){
            actualPlayer = 'O';
        }
        else{
            actualPlayer = 'X';
        }
    }
    function updateUI() {
        const boxes = document.getElementsByClassName("box");
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = board[i];
        }
    }
    function handleClick(position) {
        if (board[position] === '-') {
            board[position] = actualPlayer;
            turn++;
            actualPlayer = (actualPlayer === 'X') ? 'O' : 'X';
            updateUI();
        } else {
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



const gameboard = createGame();
