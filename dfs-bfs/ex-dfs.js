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

const visited = Array(9).fill(false);

const dfs = (visit) => {
  const answer = [];
  const dfsImple = (visit) => {
    visited[visit] = true;
    answer.push(visit);
    for (const i of graph[visit]) {
      if (!visited[i]) {
        dfsImple(i);
      }
    }
  };
  dfsImple(visit);

  return answer;
};

const sol = () => {
  console.log(dfs(1));
};

sol();
