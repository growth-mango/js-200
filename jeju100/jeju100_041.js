//소수를 판별하는... 비교
//소스는 1보다 큰 자연수 중 1과 자기자신만을 약수로 가지는 수. 1은 1보다 크지 않기 때문에 소수가 아님.
// 7: 1과 7사이에 있는 수로 계속 나눠본다.

//if 문

const prime = 1;

function primeFunc(n) {
  //1보다 큰 수와 나누어야 하니까
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      // 2 부터 10 까지 숫자가 늘어나며 나누다가 0이 나오면 바로 NO 한 번 찍고 탈출
      console.log("NO");
      return false;
    }
  }
  // 입력된 숫자가 만약 1이면 for문을 빠져나와 1인지 확인한다. 1은 소수가 아니므로 NO 출력
  if (n === 1) {
    console.log("NO");
    return false;
  }
  // 0이 안나오면 for 문을 나와서 YES 찍기 (안그럼 for문을 돌며 i가 더해지는 수 만큼 YES가 찍힘)
  console.log("YES");
}

primeFunc(prime);
