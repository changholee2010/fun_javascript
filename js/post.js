// post.js
// 1. fetch 글목록 출력.
const fields = ["id", "title", "author"];
const target = document.querySelector("#postList");
let new_id = 0; // 신규글번호

fetch("http://192.168.0.29:3000/posts")
  .then((resp) => resp.json())
  .then((data) => {
    // 데이터 건수만큼 tr 생성해주기.
    data.forEach((elem) => {
      target.appendChild(makeTr(elem));
    });
    // reduce.
    new_id = data.reduce((acc, elem) => {
      return acc > elem.id ? acc : elem.id;
    }, 0);
    console.log(new_id);
  })
  .catch((err) => console.log(err));

// 등록이벤트.
document
  .querySelector('form[name="addForm"]')
  .addEventListener("submit", (e) => {
    e.preventDefault();
    // title, author => 입력값.
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    // fetch. Post요청처리.
    fetch("http://localhost:3000/posts", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: Number(new_id) + 1, title, author }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  });

// tr생성함수.
function makeTr(post) {
  let tr = document.createElement("tr");
  for (let field of fields) {
    let td = document.createElement("td");
    td.innerText = post[field]; // 객체[속성] => 값을 가져옴.
    tr.appendChild(td);
  }
  let td = document.createElement("td");
  let btn = document.createElement("button");
  btn.innerText = "삭제"; // 텍스트.
  btn.className = "btn btn-danger"; // 클래스 지정.
  btn.setAttribute("data-no", post.id); // 속성추가.
  btn.addEventListener("click", function (e) {
    // btn의 data-no속성의 값 가져오기.
    const no = this.dataset.no; // data-no의 속성값.

    // fetch(삭제는 delete요청) 호출 start.
    fetch("http://192.168.0.29:3000/posts/" + no, {
      method: "delete",
    })
      .then((resp) => resp.json())
      .then((data) => {
        // 화면삭제를 해야하지만 화면이 refresh되면서 목록을 새로 가져옴.
        tr.remove();
      })
      .catch((err) => console.log(err));
    // fetch(삭제는 delete요청) 호출 end.
  }); // end of btn.addEventListener.

  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
} // end of makeTr.
