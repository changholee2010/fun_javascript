// student.js
let students = [
  { studNo: "25-001", studName: "홍길동", score: 90 },
  { studNo: "25-002", studName: "김길동", score: 80 },
  { studNo: "25-003", studName: "박길동", score: 70 },
];

// 기존의 tbody의 html 삭제.
const target = document.querySelector("div.list tbody");
target.innerHTML = "";

makeList();

////////////////// 이벤트 //////////////////////
// 등록버튼.
document
  .querySelector('button[class*="success"]') //
  .addEventListener("click", (e) => {
    console.log(e);
    const studNo = document.querySelector("#studNo").value;
    const studName = document.querySelector("#studName").value;
    const score = document.querySelector("#score").value;
    // 항목입력X -> 입력하세요.
    if (!studNo || !studName || !score) {
      alert("입력하세요!");
      return;
    }
    students.push({ studNo, studName, score });
    makeList();
    // target.appendChild(makeTr({ studNo, studName, score })); // 속성 = 변수 => 줄임표현.
  });

////////////////// 함수 //////////////////////
// 배열 => 화면에 출력.
function makeList() {
  target.innerHTML = ""; // 기존목록 지우기.
  // 학생수만큼 생성.
  for (let i = 0; i < students.length; i++) {
    //
    let tr = makeTr(students[i]);
    // div.list tbody의 하위요소로 추가.
    target.appendChild(tr);
  }
} // end of makeList.

// 학생정보 -> tr 생성해주는 함수.
function makeTr(student = {}) {
  // tr 생성.
  let tr = document.createElement("tr");
  for (let prop in student) {
    // td 생성.
    let td = document.createElement("td");
    td.innerText = student[prop];
    tr.appendChild(td);
  }
  // 반환.
  return tr;
} // end of makeTr.
