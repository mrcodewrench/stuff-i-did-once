
var boardSize = 9; //prompt("what size board would you like to play");
var boardWidth = boardSize;
var boardHeight = boardSize;
var white = "W";
var black = "B";
var moveLog = [];
//var handicap = prompt("what will be white's handicap?")
var isBlackTurn = true;
var blackHasCaptured = 0;
var whiteHasCaptured = 0;


//populating board;

// TODO: tempBoard REALLY shouldn't be at the global scope
var tempBoard = [];
var blankBoard = function(){
    var blankBoard = [];
    for (var i = 0; i  < boardWidth; i++)
    {
        blankBoard.push([]);
    }
    for (var j = 0; j  < boardHeight; j++)
    {
        for(var g = 0; g < boardHeight; g++)
        {
            blankBoard[j].push("0");
        }
    }
    return blankBoard;
}
var gameBoard = blankBoard();


var attemptPlaceStoneFromUI = function(loc) {
    var x = loc.split(",")[0]*1;
    var y = parseInt(loc.split(",")[1]);
    if(isBlackTurn)
        attemptPlaceStone(black, x, y);
    else
        attemptPlaceStone(white, x, y);
}

var attemptPlaceStone = function(user,x,y){
    if(gameBoard[y][x] != "0"){
        alert("Occupied");
        return "Occupied";
    }
    
    var opponent = "";
    if (user === white){
        opponent = black;
    } else {
        opponent = white;
    }
    
    createTempBoard();
    placeStone(tempBoard, user, x, y);
    
    var chainsKilled = 0;
    if(y+1 <= boardSize -1 && tempBoard[y+1][x] === opponent && checkForBreath(opponent,x,y+1) === "invalid"){
        killChain(opponent,x,y+1);
        chainsKilled++;
    }
    if( y-1 >=0 && tempBoard[y-1][x] === opponent && checkForBreath(opponent,x,y-1) === "invalid"){
        killChain(opponent,x,y-1);
        chainsKilled++;
    }
    if(x+1 <= boardSize-1 && tempBoard[y][x+1] === opponent && checkForBreath(opponent,x+1,y) === "invalid"){
        killChain(opponent,x+1,y);
        chainsKilled++;
    }
    if(x-1 >=0 && tempBoard[y][x-1] === opponent && checkForBreath(opponent,x-1,y) === "invalid"){
        killChain(opponent,x-1,y);
        chainsKilled++;
    }
    if(chainsKilled === 0 && checkForKo() === false && checkForBreath(user,x,y) === "invalid"){
        alert("suicide");
        return "suicide";
    }else {
        moveLog.push(user +"," + x + "," + y)
        updateGameBoard();
        // Update UI
        var loc = x + "," + y;
        if(isBlackTurn){
            document.getElementById(loc).style.backgroundColor = "black";
        }
        else{
            document.getElementById(loc).style.backgroundColor = "white";
        }
        changeTurn();
    }
    //make room for ko function
}

var tempChain = [];
var checkForBreath = function(user,x,y){
//    board[y+1][x] --- North;
//    board[y-1][x] --- South;
//    board[y][x+1] --- East;
//    board[y][x-1] --- West;
    var moveLocation = x + "," + y;
    
    if (y+1 <= boardSize-1 && tempBoard[y+1][x] === "0"){
        tempChain = [];
        return "valid";
    }
    if(y-1 >= 0 && tempBoard[y-1][x] === "0"){
        tempChain = [];
        return "valid";
    }
    if(x+1 <= boardSize-1 && tempBoard[y][x+1] === "0"){
        tempChain = [];
        return "valid";
    }
    if(x-1 >=0 && tempBoard[y][x-1] === "0"){
        tempChain = [];
        return "valid";
    } else {
        //place current stone coordinates into tempChain
        tempChain.push(moveLocation);
        if(y+1 <= boardSize -1 && tempBoard[y+1][x] === user && tempChain.indexOf(x + "," + (y+1)) === -1 ){
            return checkForBreath(user, x, y+1);
        }
        if(y-1 >=0 && tempBoard[y-1][x] === user && tempChain.indexOf(x + "," + (y-1)) === -1 ){
            return checkForBreath(user, x, y-1)
        }
        if(x+1 <= boardSize-1 && tempBoard[y][x+1] === user && tempChain.indexOf((x+1) + "," + y) === -1){
            return checkForBreath(user, x+1, y);
        }
        if(x-1 >=0 && tempBoard[y][x-1] === user && tempChain.indexOf((x-1) + "," + y) === -1 ){
            return checkForBreath(user, x-1, y);
        }
        else {
            tempChain = [];
            return "invalid";
        }
    }
 }   

var placeStone = function(boardChoice, user, x, y){
    boardChoice[y][x] = user;
}

var removeStone = function(boardChoice,x,y){
    boardChoice[y][x] = "0";
    var loc = x + "," + y;
    document.getElementById(loc).style.backgroundColor = "gray";
}

//work on this function condition for edge of board
var killChain = function(user,x,y){
    removeStone(tempBoard,x,y);
    
    if(user === black)
        document.getElementById("whiteHasCaptured").innerHTML = ++whiteHasCaptured;
    else
        document.getElementById("blackHasCaptured").innerHTML = ++blackHasCaptured;
    
    if(y+1 <= boardSize -1 && tempBoard[y+1][x] === user){
        killChain(user,x,y+1);
    }
    if (y-1 >=0 && tempBoard[y-1][x] === user){
        killChain(user, x, y-1);
    }
    if(x+1 <= boardSize-1 && tempBoard[y][x+1] === user){
        killChain(user,x+1,y);
    }
    if (x-1 >=0 && tempBoard[y][x-1] === user){
        killChain(user,x-1,y);
    }
}

//checks to see if two boardstates are the
var checkForKo = function(){
    var matches = 0;
    //koBoard = getBoardState(moveLog.length - 2);
    for (var i = 0; i < tempBoard.length; i++)
    {
        for(var j = 0; j < tempBoard.length; j++)
        {
            if(tempBoard[i][j] === gameBoard[i][j]){
                matches++;
            }
        }
    }
    return (matches === boardHeight * boardWidth);
}





// 0,0 is bottom left
var displayBoard = function(boardChoice){
    for (var h = boardChoice.length - 1; h >= 0; h--)
    {
        console.log(boardChoice[h]);
    }
}

var createTempBoard = function(){
    tempBoard = [];
    for(var q = 0; q < boardHeight; q++)
    {
        tempBoard.push([]);
        for(var w = 0; w < boardWidth; w++)
        {
            tempBoard[q].push(gameBoard[q][w]);
        }
    }
}

var updateGameBoard = function(){
    gameBoard = [];
    for (var i = 0; i < boardWidth; i++) 
    {
        gameBoard.push([]);
        for(var j = 0; j < boardHeight; j++)
        {
            gameBoard[i].push(tempBoard[i][j]);
        }
    }
}

//for later game runs through moves and gets board state at given move position
//for "ko" current temp board will match boardstate at move index - 2

// var getBoardState = function(moveIndex){
//     boardAtMove = blankBoard();
//     for(var i = 0 ; i <= moveIndex; i++){
        
//     }
// }



var changeTurn = function()
{
    isBlackTurn = !isBlackTurn;
    
    if(isBlackTurn)
        document.getElementById("whoseTurn").innerHTML = "Black's turn";
    else
        document.getElementById("whoseTurn").innerHTML = "White's turn";
}