// const input = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
// let sorted = " ";

// // 내림차순 정렬, 중복포함 상위 3위.

// sorted = input.sort((a, b) => a - b);

// console.log(sorted);

// let top3 = [];
// let count = 0;

// while (top3.length < 4) {
//   let value = sorted.pop();
//   //중복값 제거
//   if (!top3.includes(value)) {
//     top3.push(value);
//   }
//   count++;
// }

// console.log(top3);
// console.log(count - 1);

const input = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
let sorted = [];

//오름차순으로 정렬
sorted = input.sort((a, b) => a - b);

console.log(sorted);

//끝에 있는 세 가지 숫자(즉 큰 숫자)를 담는 배열을 만든다.
let top3 = [];
let count = 0;

//pop으로 끝에 있는 숫자 4개 꺼내기
//그 과정을 카운팅
while (top3.length < 4) {
  let value = sorted.pop();
  //중복값 제거
  if (!top3.includes(value)) {
    top3.push(value);
  }
  //while 문을 통해서 중복되지 않은 큰 숫자 세개를 찾는 과정 자체 카운팅
  count++;
}

console.log(top3);
console.log(count - 1);
