const input = "hqllo my namq is hyqwon";
let result = input.replace(/q/gi, "e");

console.log(result);

console.log(input.split("q"));
console.log(input.split("q").join("e"));
