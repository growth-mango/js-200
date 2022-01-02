const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];

//짝수 일 때는 숫자가 앞으로 와야 함.
const c = a.map((value, index, array) => {
  if (value % 2 === 0) {
    return [value, b[index]];
  } else {
    return [b[index], value];
  }
});

console.log(c);
