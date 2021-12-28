const students = [
  "강은지",
  "김유정",
  "박현서",
  "최성훈",
  "홍유진",
  "박지호",
  "권윤일",
  "김채리",
  "한지호",
  "김진이",
  "김민호",
  "강채연",
];

const sorting = students.sort();

//console.log(sorting);

const output = sorting.forEach((value, index, array) => {
  console.log(`번호: ${index + 1}, 이름: ${value}`);
});

//console.log(output);
