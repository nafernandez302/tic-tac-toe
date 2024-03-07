function createGame(){
    let turn = 0;
    let actualPlayer = 'Player 1';
    let board = ['-','-','-',
                 '-','-','-',
                '-','-','-'];
    const getTurn = () => turn;
    const addTurn = () => {
        turn++;
        if(actualPlayer = 'Player 1'){
            actualPlayer = 'Player 2';
        }
        else{
            actualPlayer = 'Player 1';
        }
    }
    const getActualPlayer = () => actualPlayer;
    const playX = (position) => {
        console.assert(board[position] === '-', "square already used"); 
        board[position] = 'X';
    }
    const playO = (position) => {
        console.assert(board[position] === '-', "square already used");
        board[position] = 'O';
        
    }
    return {board, turn, actualPlayer, getTurn, addTurn, getActualPlayer,
            playX, playO}
}


function checkDiagonals(gameboard){

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
    console.log("row winner is:", winner);
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
    console.log("column winner is:", winner);
    return winner;
}

const gameboard = createGame();
gameboard.play(2);
gameboard.playX(5);
gameboard.playX(8);
checkColumns(gameboard);
checkRows(gameboard);
