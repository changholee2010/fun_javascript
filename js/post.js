// post.js
// 1. fetch 글목록 출력.
const fields = ["id", "title", "author"];
const target = document.querySelector("#postList");

fetch("http://localhost:3000/posts")
  .then((resp) => resp.json())
  .then((data) => {
    // 데이터 건수만큼 tr 생성해주기.
    data.forEach((elem) => {
      target.appendChild(makeTr(elem));
    });
  })
  .catch((err) => console.log(err));

// tr생성함수.
function makeTr(post) {
  let tr = document.createElement("tr");
  for (let field of fields) {
    let td = document.createElement("td");
    td.innerText = post[field];
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
    fetch("http://localhost:3000/posts/" + no, {
      method: "delete",
    })
      .then((resp) => resp.json())
      .then((data) => {
        // 화면삭제를 해야하지만 화면이 refresh되면서 목록을 새로 가져옴.
        tr.remove();
      })
      .catch((err) => console.log(err));
    // fetch(삭제는 delete요청) 호출 end.
  });
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}
