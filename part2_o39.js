/*
let a = 10;
console.log(a);

function print() {
  let b = 20;
  if (true) {
    let c = 30;
  }
  console.log(c);
}

print();
console.log(b);
*/

let a = "global";

function print1() {
  console.log(a);
}

function print2() {
  let a = "local";
  print1();
}

print1();
print2();
