// 문자열 메소드.
document.querySelector("#title").innerHTML = "문자열 관련.";

let pos = "Hello, World".indexOf("ox");
console.log(pos);

// indexOf 인덱스반환. vs. includes true/false 반환.
const names = ["홍길동", "박인기", "박길동"];
let cnt = 0;
for (let name of names) {
  // if (name.indexOf("길동") != -1) {
  if (name.includes("길동")) {
    cnt++;
  }
}
console.log(`길동은 ${cnt}명입니다.`);

// filter() => 조건을 만족하는 값을 새로운 배열.
const newNames = names //
  .filter((elem) => elem.includes("길동"));
console.log(newNames);
