let family = {
  adress: "seoul",
  // 객체리터럴
  members: {},
  //임명함수
  addFamily: function (age, name, role) {
    this.members[role] = {
      age: age,
      name: name,
    };
  },
};
