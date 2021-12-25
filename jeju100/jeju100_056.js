const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const w = nationWidth["korea"];
delete nationWidth["korea"];

console.log(nationWidth);

//object.entries : object -> 이중 array 로
const entry = Object.entries(nationWidth);
console.log(entry);
const values = Object.values(nationWidth);
console.log(values);

//비교할 값 저장
//max는 배열을 받을 수 없음
let gap = Math.max(...values);
console.log(gap);
let item = [];

for (let i in entry) {
  if (gap > Math.abs(entry[i][1] - w)) {
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}

console.log(item);
