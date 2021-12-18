//원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

const limitWeight = 100;
const limitPeople = 5;

const memberWeight = 50;

let count = 0;
let totalWeight = 0;

for (let i = 1; i <= limitPeople; i++) {
  totalWeight = totalWeight + memberWeight;
  //리밑 몸무게가 있음
  if (totalWeight <= limitWeight) {
    count++;
  }
}

console.log(totalWeight);
console.log(count);

const limitWeight = 50;
const peopleCount = 5;
let count = 0;

function program(limitWeight, n, ...weights) {
  let count = 0;
  let weightCount = 0;

  weights.forEach((weight, i) => {
    if (limitWeight > weightCount && limitWeight > weightCount + weight) {
      count++;
      weightCount += weight;
    }
  });

  console.log(count);
}

program(50, 5, 20, 20, 20, 20, 20);
