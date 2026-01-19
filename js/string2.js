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
document
  .querySelector("button.btn.btn-secondary")
  .addEventListener("click", (e) => {
    // 2.사용자 입력값 체크.
    const userItem = document.querySelector("#user_input");
    const userTxt = userItem.value;
    if (!userTxt) {
      alert("값을 입력하세요.");
      return;
    }
    // 3.화면의 span 요소를 가져와서 사용자 입력값과 비교 => remove()
    const spans = document.querySelectorAll("div.container>span");
    for (let span of spans) {
      if (span.textContent.indexOf(userTxt) != -1) {
        span.remove();
      }
    }
    userItem.value = ""; // 초기화.
    userItem.focus(); // 포커스.
  });

let seconds = 10000000;
let job = setInterval(() => {
  seconds--;
  // 시간종료가 된 경우.
  if (seconds < 0) {
    document.querySelector("#user_input").disabled = true; // 입력비활성화.
    if (document.querySelectorAll(".container>span").length) {
      alert("실패!");
    } else {
      alert("성공!");
    }
    clearInterval(job); // 종료.
  }
}, 1000);
