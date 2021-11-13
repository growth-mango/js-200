const store = { snack: 1000, flower: 5000, beverage: 2000 };

for (const item in store) {
  // store 객체에 item 키 정보가 있는지 확인합니다. 없으면 continue를 통해 아래 코드는 실행하지 않고 다음 순서로 넘어간다. 권장사항
  if (!store.hasOwnProperty(item)) continue;

  console.log(item + "는 가격이 " + store[item] + "원 입니다.");
}
