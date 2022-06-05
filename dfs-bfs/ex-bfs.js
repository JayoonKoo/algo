const { Queue } = require("./Queue.js");

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];
const visited = new Array(9).fill(false);

const bfs = (start) => {
  const queue = new Queue();
  queue.enqueue(start);
  visited[start] = true;

  const answer = [];

  while (queue.getLength() !== 0) {
    const v = queue.dequeue();
    answer.push(v);
    for (const i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i);
        visited[i] = true;
      }
    }
  }

  return answer;
};

const sol = () => {
  console.log(bfs(1));
};

sol();
