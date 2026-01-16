// literal.js
const n1 = 50;
const n2 = 30;

console.log(`n1값 ${n1}와 n2값 ${n2}의 합은 ${n1 + n2}`);
console.log(`n1값 ${n1}와 n2값 ${n2}의 큰값은 ${n1 > n2 ? n1 : n2}`);

const fruits = ["사과", "배", "복숭아", "포도"];
const newAry = `${fruits.map((elem) => `<li>${elem}</li>`).join("")}`;
console.log(newAry);
document.querySelector("ul").innerHTML = newAry;
