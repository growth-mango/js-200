/*
const student = {
  Yujun: 70,
  Hyewon: 100,
};

console.log(student);
console.log(typeof student);
*/

const keys = ["suhyeon", "youngchang"];
const values = [100, 90];
let obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = values[i];
}

console.log(obj);
