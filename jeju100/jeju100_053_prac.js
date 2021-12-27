//소괄호 형태가 맞는지 판단하기 : 닫기 열기가 모두 있어야 함 개수가 맞아야함
//브라켓에 ()을 넣고 빼고 넣고 뺴고 하다가 결국 0이 되면 true 임.
function mathBrackets(arr) {
  // 우선 괄호의 개수가 안맞으면 false 임.
  let count = 0;

  arr.forEach((n) => {
    if (n === "(") {
      count++;
    } else {
      count--;
    }
    if (count !== 0) {
      return false;
    }
  });

  let bracket = [];

  //포문에서 브라켓에 넣고 뺴고 넣고 뺴고
  for (let i in arr) {
    //만약 여는 괄호가 있으면 배열에 더해
    if (arr[i] === "(") {
      bracket.push("(");
    }
    //만약 닫는 괄호면 배열에서 빼
    if (arr[i] === ")") {
      //근데 만약 요 상태가 빈 상태야 그럼 false
      if (bracket.length === 0) {
        return false;
      }
      //빈상태가 아니면 pop! 뻬!
      bracket.pop();
    }
  }
  //모든게 정상이면 포문을 빠져나와서 트루
  return true;
}

bracket = [];

const arr = ")))))".split("");
console.log(arr);
console.log(mathBrackets(arr));
