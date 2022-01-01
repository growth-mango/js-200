// const input = "복잡한 세상 편하게 살자".split(" ");

// console.log(input);

// const result = input
//   .map((value, index, array) => {
//     return value.charAt(0);
//   })
//   .join("");

// console.log(result);

const input = "복잡한 세상 편하게 살자"
  .split(" ")
  .map((value, index, array) => {
    return value.charAt(0);
  })
  .join("");

console.log(input);
