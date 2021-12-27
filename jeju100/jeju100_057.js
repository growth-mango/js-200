let s = " ";

for (let i = 0; i <= 1000; i++) {
  s = s + i;
}

console.log(s.match(/1/g).length);

// let count = 0;
// for (const k of s) {
//   if (k == 1) {
//     count++;
//   }
// }

// console.log(count);
