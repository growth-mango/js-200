// const input = "거꾸로".split("").reverse().join("");

// console.log(input);

const input = "거꾸로".split("");
let output = "";

//true면 계속, false 면 멈춤
for (let i = input.length - 1; i >= 0; i--) {
  output = output + input[i];
}

console.log(output);
