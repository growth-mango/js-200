function program(...nums) {
  let sumNum = 0;
  for (let i = 0; i < nums.length; i++) {
    sumNum = sumNum + nums[i];
  }
  console.log(sumNum);
}

program(1, 2, 3, 4, 5);
//nums를 다시 array to number 해야 하는데 ...
