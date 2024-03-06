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

}

function checkColumns(gameboard){

}