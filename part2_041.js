const person = "harin";

function print() {
  const person2 = "jay";

  function innerPrint() {
    console.log(person);
    console.log(person2);
  }

  innerPirnt();
  console.log("print fisished");
}

print();
console.log("finished");
