// 구조분해(객체, 배열)
const obj = {
  name: "Hong",
  age: 20,
};
// let name = obj.name;
// let age = obj.age;
let { name, age } = obj;
console.log(`1 name => ${name}, age => ${age}`);

// fetch 함수(비동기방식).
// ajax(Asynchronous Javascript And Xml)
fetch("js/data.json")
  .then((resp) => resp.json())
  .then(({ name, age }) => {
    console.log(`2 name => ${name}, age => ${age}`);
  })
  .catch((err) => {
    console.log(err);
  });

// 배열의 구조분해.
const names = ["Hong", "Hwang", "Choi"];
// const fname = names[0];
const [name1, name2] = names;
console.log(name1, name2);

// 비동기처리.
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
      console.log("4");
    }, 1500);
  }, 500);
}, 1000);
