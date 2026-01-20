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
  btn.innerText = "삭제";
  btn.className = "btn btn-danger";
  btn.setAttribute("data-no", post.id);
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}
