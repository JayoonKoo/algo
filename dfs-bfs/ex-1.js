const N = 5;
const directions = ["R", "R", "R", "U", "D", "D"];

// 동 서 남 북
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const indexByDirection = {
  R: 0,
  L: 1,
  D: 2,
  U: 3,
};

function sol() {
  const board = makeBoard();
  // y, x
  let current = [1, 1];
  for (let direct of directions) {
    const index = indexByDirection[direct];
    current = calCurrentPostion(current, index);
  }

  return current;
}

function makeBoard() {
  const board = [];
  for (let i = 0; i <= N; i++) {
    const col = [];
    for (let j = 0; j <= N; j++) {
      col.push(`${i}, ${j}`);
    }
    board[i] = col;
  }
  return board;
}

function calCurrentPostion(current, index) {
  const x = current[1] + dx[index];
  const y = current[0] + dy[index];

  if (x <= 0 || y <= 0) {
    return current;
  }

  return [y, x];
}

console.log(sol());
