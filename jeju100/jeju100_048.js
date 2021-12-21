//대소문자 바꿔서 출력하기

const input = "AAABBBcccddd";

let arr = input.split("");

const result = arr
  .map((n) => {
    if (n === n.toUpperCase()) {
      return n.toLowerCase();
    }
    return n.toUpperCase();
  })
  .join("");

console.log(result);
