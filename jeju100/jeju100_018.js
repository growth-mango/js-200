/*
function avg(korean, math, english) {
  return (korean + math + english) / 3;
}

console.log(Math.floor(avg(89, 91, 95)));
*/

const score = prompt("국어 수학 영어 점수를 입력하세요").split(" ");
let sum = 0;

for (let i = 0; i < score.length; i++) {
  sum = sum + parseInt(score[i], 10);
}

console.log(Math.floor(sum / score.length));
