//reverse

/*reverse 사용 
const input = "거꾸로";
const inputReverse = input.split("").reverse().join("");

console.log(inputReverse);
*/

//for 문 사용
const input = "거꾸로";
let inputReverse = "";

for (let i = input.length - 1; i >= 0; i--) {
  inputReverse = inputReverse + input[i];
}

console.log(inputReverse);
