const input = prompt("a와 b의 제곱을 구해줘요.").split(" ");
let number = " ";

for (let i = 0; i < input.length - 1; i++) {
  for (let j = 1; j < input.length; j++) {
    number = Math.pow(parseInt(input[i], 10), parseInt(input[j], 10));
  }
}

console.log(`a와 b의 제곱은 ${number} 입니다.`);
