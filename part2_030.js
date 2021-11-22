let adress = "seoul";
let members = {};
let addFamily = function (age, name, role) {
  this.members[role] = { age, name };
};
let getHeadCount = function () {
  return Object.keys(this.members).length;
};

let family = { adress, members, addFamily, getHeadCount };

//console.log(family);

family.addFamily(30, "chole", "aunt");
console.log(family.getHeadCount());
