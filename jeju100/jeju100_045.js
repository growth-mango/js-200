//getTime 이용하여 현재 연도 구하기

const curDate = new Date();
let curTime = curDate.getTime();

//1년은 몇 밀리 세컨즈 일까
// console.log(60 * 60 * 24 * 365 * 1000);

const aYear = 60 * 60 * 24 * 365 * 1000;

console.log(Math.floor(curTime / aYear + 1970));
