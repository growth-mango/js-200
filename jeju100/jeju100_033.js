/*
const num = "12345";
let newNum = " ";

for (let i = num.length - 1; i >= 0; i--) {
  newNum = newNum + num[i];
}

console.log(newNum);
*/

const num = "12345";
let newNum = num.split("").reverse().join("");

console.log(newNum);
