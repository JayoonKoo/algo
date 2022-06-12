const input = `4 5
00110
00011
11111
00000`;

const inputSplit = input.split("\n");
const [N, M] = inputSplit.shift().split(" ").map(Number);
const graph = inputSplit.map((row) => row.split(""));

const dfs = (x, y) => {
  if (x < 0 || x >= M || y < 0 || y >= N) {
    return false;
  }
  if (graph[y][x] === "0") {
    graph[y][x] = "1";
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
    return true;
  }
};

const sol = () => {
  const answer = graph.reduce((answer, row, y) => {
    row.forEach((col, x) => {
      if (col !== "1" && dfs(x, y)) answer += 1;
    });
    return answer;
  }, 0);
  return answer;
};

console.log(sol());
