const input = 1;

//1과 자기자신으로만 나눠지는 수
//
let sosu = function (num) {
  //trune면 계속
  for (let i = 2; i < num; i++) {
    //input num이 2이상의 숫자로 나누었을 때 0으로 떨어지면 소수가 아님
    if (num % i === 0) {
      console.log("NO");
      return false;
    }
  }
  if (num === 1) {
    console.log("NO");
    return false;
  }
  //for문을 도는 동안 NO가 나오지 않으면 그 수는 소수임
  console.log("YES");
};

sosu(input);
