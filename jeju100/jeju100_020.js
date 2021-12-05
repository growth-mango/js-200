const input = prompt().split(" ");
let num = " ";
let num2 = " ";

for (let i = 0; i < input.length - 1; i++) {
  for (let j = 1; j < input.length; j++) {
    num = parseInt(input[i], 10) / parseInt(input[j], 10);
    num2 = parseInt(input[i], 10) % parseInt(input[j], 10);
  }
}

console.log(`값 : ${num}\n나머지 : ${num2} `);
