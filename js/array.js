// 배열관련 메소드.
const numAry = [];
for (let i = 1; i <= 6; i++) {
  numAry.push(Math.ceil(Math.random() * 100)); // 1 <= x < 101
}

// 반복문.
numAry.forEach((elem, idx, ary) => console.log(elem));

// map()
const mapResult = numAry.map((elem) => ({ score: elem })); // {score: 89}
console.log(mapResult);

// filter()
const filResult = numAry.filter((elem) => elem > 90);
console.log(filResult);

console.clear();
console.log(numAry);
// reduce()
let result = numAry.reduce((acc, elem, idx, ary) => {
  console.log(`acc=>${acc}, elem=>${elem}`);
  // 50보다 큰값만 저장.
  if (elem > 50) {
    acc.push(elem);
  }
  return acc;
}, []);
console.log(`result=> `, result);

// reduce()
result = numAry.reduce((acc, elem) => {
  let li = document.createElement("li");
  li.textContent = elem;
  acc.appendChild(li); // <li>68</li>
  return acc;
}, document.querySelector("ul#list"));

// from()

result = document.querySelectorAll("#list li");
console.log(result);
result = Array.from(result); // NodeList => Array.
// NodeList은 forEach 가능.
result.forEach((elem) => console.log(elem.innerText));

result = result.filter((elem) => elem.innerText < 50);
console.log(result);
