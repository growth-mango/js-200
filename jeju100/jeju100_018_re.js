const input = [20, 35, 40];
let sum = 0;

input.forEach((value, index, array) => {
  sum = sum + value;
});

console.log(Math.floor(sum / input.length));
