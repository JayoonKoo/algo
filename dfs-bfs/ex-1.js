const N = 5;
const directions = ["R", "R", "R", "U", "D", "D"];

const board = new Array(N + 1);

for (let i = 0; i <= N; i++) {
  board[i] = new Array(N + 1);
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    board[i][j] = `(${i}, ${j})`;
  }
}

// 동 북 서 남
const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];
const moveTypes = ["R", "U", "L", "D"];

let [x, y] = [1, 1];

for (let direction of directions) {
  const directIndex = moveTypes.findIndex((type) => type === direction);
  if (
    isPossibleDirection(dx[directIndex], x, N) &&
    isPossibleDirection(dy[directIndex], y, N)
  ) {
    x += dx[directIndex];
    y += dy[directIndex];
  }
}

function isPossibleDirection(moveTo, current, N) {
  if (moveTo + current < 1 || moveTo + current > N) {
    return false;
  }
  return true;
}
