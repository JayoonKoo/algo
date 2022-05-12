const N = 5;

function getTotalSecond() {
  return N * 60 * 60 + 59 * 60 + 59;
}

function calcTimeBySecond(currentSecond) {
  const hour = parseInt(currentSecond / 3600);
  const min = parseInt((currentSecond - hour * 3600) / 60);
  const second = currentSecond - hour * 3600 - min * 60;

  return {
    hour,
    min,
    second,
  };
}

function sol() {
  const totalSecond = getTotalSecond();
  let threeNum = 0;
  for (let currentSecond = 0; currentSecond <= totalSecond; currentSecond++) {
    const { hour, min, second } = calcTimeBySecond(currentSecond);
    const timeNumberStr = `${hour}${min}${second}`;
    if (timeNumberStr.includes("3")) threeNum += 1;
  }
  console.log(threeNum);
}

sol();
