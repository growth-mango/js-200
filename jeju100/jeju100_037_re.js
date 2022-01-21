const input = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
let result = {};
let winner = "";

input.forEach((value, index, array) => {
  let val = value;
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
});

winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});

console.log(winner);
console.log(`${winner}가 총 ${result[winner]}표로 반장이 되었습니다.`);
