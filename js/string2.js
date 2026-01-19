// string2.js
const str = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non itaque maiores ullam tempore dignissimos, odio, amet ipsa in corrupti libero cumque, architecto inventore? Quasi officiis excepturi animi voluptas ipsam.`;
const strAry = str.split(" ");
console.log(strAry);

// 문자열생성.
const container = document.querySelector("div.container");
for (let word of strAry) {
  let span = document.createElement("span");
  span.innerHTML = word;
  container.appendChild(span);
}

//////////////////////////////////////////
// 1.버튼에 클릭이벤트 등록.
// 2.사용자 입력값 체크.
// 3.화면의 span 요소를 가져와서 사용자 입력값과 비교 => remove()
