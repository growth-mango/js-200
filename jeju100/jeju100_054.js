// //공백 기준으로 배열로 만들어줌.
// const num = "1 3 8 4 2 5".split(" ");

// num.sort((a, b) => a - b);

// function program(num) {
//   for (let i = 0; i < num.length - 1; i++) {
//     //sorting 의 i 번째보다 +1 큰 원소와 i+1 한 수가 같지 않으면
//     //즉 처음에는 1의 다음 원소인 2와 1+1 2를 비교하여 같지 않으면
//     if (Number(num[i]) + 1 !== Number(num[i + 1])) {
//       return "NO";
//     }
//   }
//   //for문을 빠져나와서...!
//   return "YES";
// }

// console.log(program(num));

const num = "1 2 3 4 9 5 6 7".split(" ");

num.sort((a, b) => a - b);

console.log(num);

function program(num) {
  //value, index
  num.forEach((val, ind) => {
    if (Number(val + 1) !== Number(ind + 1) - 1) {
      return "NO";
    }
  });
  return "YES";
}

console.log(program(num));
