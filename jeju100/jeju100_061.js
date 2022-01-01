//문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

const s = "aaabbbbcdddd".split("");
let result = "";
let count = 0;

//첫번째 값 이랑, 그 다음 값이랑 같으면 현재 값만 출력
//같지 않으면
s.forEach((value, index, array) => {
  if (value == array[index + 1]) {
    count++;
  } else {
    result = value + String(count);
  }
});

console.log(result);
