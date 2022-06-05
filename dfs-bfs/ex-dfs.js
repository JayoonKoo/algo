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

const sol = (visit) => {
  const visited = Array(9).fill(false);
  const answer = [];
  const dfs = (visit) => {
    visited[visit] = true;
    answer.push(visit);
    for (const i of graph[visit]) {
      if (!visited[i]) {
        dfs(i);
      }
    }
  };
  dfs(visit);
  console.log(answer);
};

sol(3);
