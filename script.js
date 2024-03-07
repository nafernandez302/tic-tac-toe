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

const gameboard = createGame();

function checkDiagonals(gameboard){

}

function checkRows(gameboard){
    console.assert(gameboard.getTurn() == 9, "game didn't end");
    let hasWinner = false;
    let winner = undefined;
    for (let i= 0; i < 3; i++) {
        let letter = gameboard.board[i*3];
        if(!hasWinner && (letter === gameboard.board[i*3] + 1) && (letter === gameboard.board[i*3] + 2)){
                hasWinner = true;
                winner = letter;
            }
        
    }
    return winner;
}

function checkColumns(gameboard){
    console.assert(gameboard.getTurn() == 9, "game didn't end");
    let hasWinner = false;
    let winner = undefined;
    for (let i= 0; i < 3; i++) {
        let letter = gameboard.board[i];
        if(!hasWinner && (letter === gameboard.board[i+3]) && (letter === gameboard.board[i+6])){
                hasWinner = true;
                winner = letter;
            }
        
    }
    return winner;
}