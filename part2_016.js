/*
console.log(7 > 3);
console.log(7 < 3);
*/

const cart = [
  { name: "옷", price: 2000 },
  { name: "가방", price: 1000 },
];

const numOfItems = `카트에 ${cart.length}개의 아이템이 있습니다.`;
const cartTable = `<ul>
    <li>품목: ${cart[0].name}, 가격: ${cart[0].price}</li>
    <li>품목: ${cart[1].name}, 가격: ${cart[1].price}</li>
</ul>`;

console.log(numOfItems);
console.log(cartTable);

const personName = "suhyeon";
const helloString = "hello " + personName;
const helloTempalteSting = `hello ${personName}`;

console.log(helloString);
console.log(helloTempalteSting);

console.log(helloString === helloTempalteSting);
console.log(typeof helloTempalteSting);