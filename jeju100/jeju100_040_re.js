const weightLimit = 50;

function program(weightLimit, n, ...weights) {
  let count = 0;
  let weightCount = 0;

  weights.forEach((weight, index) => {
    //true면 실행한다.
    if (weightLimit > weightCount && weightLimit > weightCount + weight) {
      count++;
      weightCount = weightCount + weight;
    }
  });
  console.log(count);
}

program(50, 5, 20, 20, 20, 20, 20);
