//최댓값 구하기

const input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11];

/*
let maxNum = " ";
//현재값을 다음 인덱스 값이랑 비교해서 큰 값을 유지한다.
for (let i = 0; i < input.length; i++) {
  if (!maxNum) {
    maxNum = input[i];
  }

  if (maxNum < input[i]) {
    maxNum = input[i];
  }
}

console.log(maxNum);
*/

input.sort((a, b) => {
  return b - a;
});

console.log(input[0]);

//split : 배열화
//join : 배열을 다시 > 스트링, 넘버
