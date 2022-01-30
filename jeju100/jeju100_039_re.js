// const input = "querty".split();

// let output = input.map((value, index, array) => {
//   if (value === "q") {
//     "q" = "e";
//   }
//   return output;
// });

// console.log(output);

const input = "querty";
//split 배열로 분리해주는 것 (q)로 분리할 것
//join 은 아무것도 넣어주지 않으면 쉼표를 넣음
console.log(input.split("q").join("e"));
