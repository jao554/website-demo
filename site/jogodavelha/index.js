const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('reset');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameOver = false;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(index) {
  if (board[index] === '' && !isGameOver) {
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    if (checkWinner()) {
      statusDisplay.textContent = `${currentPlayer} Venceu!`;
      isGameOver = true;
    } else if (board.every(cell => cell !== '')) {
      statusDisplay.textContent = 'Empate.';
      isGameOver = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      statusDisplay.textContent = `Vez do(a) ${currentPlayer}`;
    }
  }
}

function checkWinner() {
  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return board[a] === board[b] && board[b] === board[c] && board[a] !== '';
  });
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  isGameOver = false;
  currentPlayer = 'X';
  cells.forEach(cell => cell.textContent = '');
  statusDisplay.textContent = `Vez do(a) ${currentPlayer}`;
}

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});

resetButton.addEventListener('click', resetGame);