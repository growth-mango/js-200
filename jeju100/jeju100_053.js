//입력으로 주어진 괄호 문자열이 바른 문자열인지 판별

function mathBrackets(arr) {
  let count = 0;
  //일단 괄호의 개수가 맞지 않으면(홀수면) false 임
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      count++;
    }
    if (arr[i] === ")") {
      count--;
    }
  }
  //count 가 0 인 경우에만 코드 작성. 아니면 false 를 return 하면 됨.
  if (count !== 0) {
    return false;
  }

  let bracket = [];
  for (let i in arr) {
    if (arr[i] === "(") {
      bracket.push("(");
    }
    if (arr[i] === ")") {
      if (bracket.length === 0) {
        return false;
      }
      bracket.pop();
    }
    return true;
  }
}

const arr = " ".split("");
console.log(arr);
console.log(mathBrackets(arr));

if (mathBrackets(arr) === true) {
  console.log("YES");
} else {
  console.log("NO");
}
