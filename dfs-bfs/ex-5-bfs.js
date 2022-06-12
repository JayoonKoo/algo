const input = `4 5
00110
00011
11111
00000`;

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peak() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const inputSetting = () => {
  const inputArr = input.split("\n");
  const [N, M] = inputArr[0].split(" ");
  inputArr.shift();
  const board = inputArr.map((row) => {
    return row.split("");
  });
  return { N: Number(N), M: Number(M), board };
};

const getBfsPreInfo = (N, M) => {
  const visited = [];
  for (let i = 0; i < N; i++) {
    visited.push(new Array(M).fill(false));
  }
  return visited;
};

// 동서남북
const move = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const isOutOfBoard = (tx, ty, N, M) => {
  return tx < 0 || tx >= M || ty < 0 || ty >= N;
};

const bfs = (queue, visited, N, M, board) => {
  while (queue.getLength() !== 0) {
    const [cx, cy] = queue.dequeue();
    for (const [dx, dy] of move) {
      const tx = cx + dx;
      const ty = cy + dy;
      if (
        !isOutOfBoard(tx, ty, N, M) &&
        !visited[ty][tx] &&
        board[ty][tx] !== "1"
      ) {
        queue.enqueue([tx, ty]);
        visited[ty][tx] = true;
        bfs(queue, visited, N, M, board);
      }
    }
  }
};

const sol = () => {
  const { N, M, board } = inputSetting();
  const visited = getBfsPreInfo(N, M);

  const answer = board.reduce((answer, row, y) => {
    row.forEach((col, x) => {
      if (col === "1" || visited[y][x]) {
        return;
      }
      answer += 1;
      const queue = new Queue();
      queue.enqueue([x, y]);
      visited[y][x] = true;
      bfs(queue, visited, N, M, board);
    });
    return answer;
  }, 0);

  return answer;
};

console.log(sol());
