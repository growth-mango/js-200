// const s = "hi";

// const n = 25 + parseInt(s.length / 2, 10);

// //왼쪽 채우기 n 글자수 만큼 = 으로 채워줘
// const left = s.padStart(n, "=");
// console.log(left);
// console.log(left.length);

// //오른쪽 채우기
// const right = left.padEnd(50, "=");
// console.log(right);
// console.log(right.length);

const s = "hi";

//50자로 맞춰야 함.
//25자 + 글자수 렝스의 반만큼 (문자열이니까 10진수로 변환)
const n = 25 + parseInt(s.length / 2, 10);

//왼쪽채우기 //s(문자) 포함 n의 length가 될때 까지 = 채워줘
const left = s.padStart(n, "=");

//오른쪽 채우기 //left 포함 50 length가 될 때 까지 = 채워줘
const right = left.padEnd(50, "=");

console.log(right);
console.log(right.length);
