const input = ["K1KA5CB7", "AJKDLSI412K4JSJ9D"];

const isString = (testing) => {
  return /^[A-Za-z]{1,1}$/.test(testing);
};

const sol = () => {
  const answer = [];
  for (const target of input) {
    const stringArr = [];
    let sum = 0;
    for (const testing of target) {
      if (isString(testing)) {
        stringArr.push(testing);
      } else {
        sum += Number(testing);
      }
    }
    stringArr.sort();
    answer.push(stringArr.join("") + sum);
  }

  return answer;
};

console.log(sol());
