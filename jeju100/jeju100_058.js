const num = 123456789;
const str = num.toString();

//뒤에서부터 세개씩 잘른 다음에 콤마 찍고 이어 붙이기!?

function comma(s) {
  if (s.length <= 3) {
    return s;
  } else {
    //slice(start값 , 끝 값) 끝 값은 -1 로 생각해주어야함
    return comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
  }
}

console.log(comma(str));

//어떻게 동작하냐면

//슬라이스. 0번째부터 끝에서 세번째 까지 잘라서 위로 넘김
//123456789

//123456은 넘어간 상태에서 ,를 붙이고 렝스 마이너스 3 즉 789 을 붙임
//123456 789

//if 문에서 렝스가 3이하가 아님 123456 이니까
//123456 ,789
// 스라이스 0부터 끝에서 세번째 까지 잘라서 위로 넘김
//123 ,456 ,789

// 123 위로 넘김 if문 렝스 3이하 맞음
// 123,456,789 출력
