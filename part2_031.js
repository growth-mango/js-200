let obj = {};
for (let i = 0; i < 4; i++) {
  obj["key" + i] = i;
}
console.log(obj);

let profile = "chole:30";
let person = {
  [profile]: true,
  [profile.split(":")[0]]: profile.split(":")[1],
};
console.log(person);

let { a: newA = 10, f: newF = 5 } = obj;
console.log(`newA >>> ${newA}`);
