var prompt = require('prompt');
var grid = [];
grid[0]=[' ', ' ', ' ']
grid[1]=[' ', ' ', ' ']
grid[2]=[' ', ' ', ' ']

prompt.start();
var currentSymbol;

console.log('What symbol will player 1 use? Select X or O.');
prompt.get(['symbol'], function (err, result) {
  currentSymbol = result.symbol;
  console.log(`You chose ${currentSymbol}`);
  console.log('Which square do you want to enter? row, column');
  getMove();
});

function getMove(){
  prompt.get(['Which square?'], function (err, result) {
    var resultArr = result['Which square?'].split(',');
    var r = resultArr[0];
    var c = resultArr[1];
    setSquare(r,c, currentSymbol);
    displayGrid();
    checkForWinner();
    toggleSymbol();
    getMove();
  })
}
function setSquare(r, c, symbol){
  grid[r][c] = symbol;
}
function checkForWinner(){

}
function toggleSymbol(){
  currentSymbol = currentSymbol == 'X' ? 'O' : 'X'
}

function displayGrid(){
  console.log(` ${grid[0][0]} | ${grid[0][1]} | ${grid[0][2]}`)
  console.log('-----------')
  console.log(` ${grid[1][0]} | ${grid[1][1]} | ${grid[1][2]}`)
  console.log('-----------')
  console.log(` ${grid[2][0]} | ${grid[2][1]} | ${grid[2][2]}`)
}
