let arr = [];
let total = 0;

//i가 20 이하면 계속 -
for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}

console.log(arr);
arr.forEach((n) => {
  while (n) {
    total = total + (n % 10);
    n = Math.floor(n / 10);
  }
});

console.log(total);
