const score = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95].sort();
console.log(score);

let top3 = [];
let count = 0;

while (top3.length < 3) {
  let value = score.pop();
  //top3안에 value 값이 있다면 true 를 반환해주는 함수.
  if (!top3.includes(value)) {
    top3.push(value);
  }
  count++;
}

console.log(top3);
console.log(count);
