// arguments 객체
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(arguments instanceof Array);
  return total;
}

let sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);
