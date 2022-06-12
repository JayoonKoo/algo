const input = `4 5
00110
00011
11111
00000`;

const makeVisited = (N, M) => {
  const visited = [];
  for (let i = 0; i < N; i++) {
    visited.push(new Array(M).fill(false));
  }
  return visited;
};

const isVisitPossible = (x, y, N, M, board, visited) => {
  return (
    x >= 0 && x < M && y >= 0 && y < N && board[y][x] !== "1" && !visited[y][x]
  );
};

// 동서남북
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const dfs = (board, start, visited, N, M) => {
  const [x, y] = start;
  visited[y][x] = true;

  for (const [dx, dy] of directions) {
    const [nextX, nextY] = [x + dx, y + dy];
    if (isVisitPossible(nextX, nextY, N, M, board, visited)) {
      dfs(board, [nextX, nextY], visited, N, M);
    }
  }
};

const sol = () => {
  const inputSplit = input.split("\n");
  const [N, M] = inputSplit
    .shift()
    .split(" ")
    .map((v) => Number(v));
  const board = inputSplit.map((row) => row.split(""));
  const visited = makeVisited(N, M);

  const answer = board.reduce((answer, row, y) => {
    row.forEach((col, x) => {
      if (col === "1" || visited[y][x]) {
        return answer;
      }
      dfs(board, [x, y], visited, N, M);
      answer += 1;
    });
    return answer;
  }, 0);

  return answer;
};

console.log(sol());
