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

const input = `5 6
101010
111111
000001
111111
111111`;

const [nm, ...graphTemp] = input.split("\n");
const [N, M] = nm.split(" ").map(Number);
const graph = graphTemp.map((graphTempItem) =>
  graphTempItem.split("").map(Number)
);

// 상 하 좌 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const isOutOfGraph = (x, y) => {
  return x < 0 || x >= N || y < 0 || y >= M;
};

const isWall = (x, y) => {
  return graph[x][y] === 0;
};

const isFirstVisit = (x, y) => {
  return graph[x][y] === 1;
};

const bfs = (x, y) => {
  const queue = new Queue();
  queue.enqueue([x, y]);
  while (queue.getLength() !== 0) {
    const [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (isOutOfGraph(nx, ny)) continue;
      if (isWall(nx, ny)) continue;
      if (isFirstVisit(nx, ny)) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }

  return graph[N - 1][M - 1];
};

console.log(bfs(0, 0));
