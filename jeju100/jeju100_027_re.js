const name = ["Yujin", "Hyewon"];
const score = [70, 100];
let obj = {};

// name.forEach((value, index, array) => {
//     score.forEach((val, in, arr) => {
//         obj = value + val
//     })
// });

// console.log(obj);

//true 면 계속 false 면 멈춤
for (let i = 0; i < name.length; i++) {
  obj[name[i]] = score[i];
}

console.log(obj);
