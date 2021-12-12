/*
const input = [176, 156, 155, 165, 166, 169];

//첫 번째가 가장 작고, 두번 째가 가장 작고....
//for문 돌리며 비교 첫 번 째, 두 번 째, 두 번째 세 번째....

/*
for (let i = 0; i < input.length; i++) {
  if (input[i] <= input[i + 1]) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
*/
/*
if (input === input.sort((a, b) => a - b)) {
  console.log("YES");
} else {
  console.log("NO");
}
*/

const unsorted = "108 98 100 101 105";
let sorted = " ";

//배열 메소드: split sort/다시 문자열로 join 메소드

sorted = unsorted
  .split(" ")
  .sort((a, b) => a - b)
  .join(" ");

if (unsorted === sorted) {
  console.log("YES");
} else {
  console.log("NO");
}

/*
console.log(unsorted.split(" ").sort((a, b) => a - b));


console.log(unsorted.split(" ").sort(function(a,b){
    return a -b 
}))
*/
