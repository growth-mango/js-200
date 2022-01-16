// const input = [176, 156, 155, 165, 166, 169];
// let sorted = [];
// sorted = input.sort();

// console.log(input);
// console.log(sorted);

// if (input == sorted) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

const input = "176 156 155 165 166 169";
let sorted = " ";
sorted = input
  .split(" ")
  .sort((a, b) => a - b)
  .join(" ");

if (input == sorted) {
  console.log("YES");
} else {
  console.log("NO");
}
