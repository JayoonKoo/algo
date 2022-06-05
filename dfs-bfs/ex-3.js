const pos = "a1";

const colByAlpa = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
};

const dx = [-1, -2, -2, -1, 1, 2, 2, 1];
const dy = [-2, -1, 1, 2, 2, 1, -1, -2];

const makePossible = ({ x, y }) => {
  const possible = dx.map((tx, i) => [x + tx, y + dy[i]]);
  return possible;
};

function sol() {
  const [alphX, y] = pos.split("");
  const currnet = {
    x: colByAlpa[alphX],
    y: Number(y),
  };
  const possible = makePossible(currnet);
  return possible.reduce((a, c) => {
    if (c.includes(-1) || c.includes(0) || c.includes(9) || c.includes(10)) {
      return a;
    }
    return a + 1;
  }, 0);
}

console.log(sol());
