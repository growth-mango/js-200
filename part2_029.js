const family = {
  adress: "seoul",
  members: {},
  addFamily: function (age, name, role) {
    this.members[role] = {
      age: age,
      name: name,
    };
  },
  getHeadCount: function () {
    return Object.keys(this.members).length;
  },
};

family.addFamily(30, "chole", "aunt");
family.addFamily(3, "lyne", "niece");
family.addFamily(19, "cholong", "dog");
//console.log(family.getHeadCount());

const printMembers = function () {
  const members = family.members;
  for (role in members) {
    console.log(
      "role => " +
        role +
        ", name => " +
        members[role].name +
        ", age => " +
        members[role].age
    );
  }
};
printMembers();

const members = family.members;
//새로운 오브젝트 프로퍼티 추가 key가 네퓨이고 값은 age, name 인 속성을 members 에 추가
members["nephew"] = { age: 3, name: "hyun" };
//오브젝트 프로퍼티 수정 members에 원래 있던 값으로 .으로 접근하여 새로운 값을 할당
members.niece = { age: 5, name: "lyn" };
//오브젝트 프로퍼티 삭제
delete members.aunt;
printMembers();
