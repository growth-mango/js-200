// //배열로 입력 받은 것을
// const input = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
// //객체로 바꾸고 (출력할 때, 몇 표)
// let result = {};
// //출력할 때, 누구
// let winner = "";

// //객체를 배열로
// for (let i in input) {
//   let val = input[i];
//   result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
// }

// winner = Object.keys(result).reduce(function (a, b) {
//   console.log(a, b);
//   // 식 ? 참 : 거짓 (삼항)
//   return result[a] > result[b] ? a : b;
// });

// console.log(winner);
// console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);

const input = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
let result = {};
let winner = {};

for (let i in input) {
  let val = input[i];
  //value 는
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

// {원범 : undefined}

//reduce 함수는 result 객체의 키를 돌며 끊임없이 a와 b에 대입한다.
winner = Object.keys(result).reduce(function (a, b) {
  console.log(a, b);
  return result[a] > result[b] ? a : b;
});

console.log(winner);

//result 객체 winner 키의 값을 불러온다.
console.log(`${winner}가 ${result[winner]}표를 얻었어요.`);
