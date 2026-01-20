// spread(펼침) operator
const friends = ["Park", "Choi", "Kim"];
console.log(...friends);

const newAry = [...friends];
console.log(newAry);

const clone = friends;
const clone2 = [...friends];
friends.push("Lee");
console.log(clone2, friends);
const clone3 = [];
clone3.push(...friends); // [["Park", "Choi", "Kim"]]

// 배열(object) 객체는 변수에 객체의 주소값을 참조변수.
console.log(clone3);
