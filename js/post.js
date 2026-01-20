// post.js
// 1. fetch 글목록 출력.
const fields = ["id", "title", "author"];
const target = document.querySelector("#postList");

fetch("http://localhost:3000/posts")
  .then((resp) => resp.json())
  .then((data) => {
    // 데이터 건수만큼 tr 생성해주기.
    data.forEach((elem) => {
      let tr = document.createElement("tr");
      for (let field of fields) {
        let td = document.createElement("td");
        td.innerText = elem[field];
        tr.appendChild(td);
      }
      target.appendChild(tr);
    });
  })
  .catch((err) => console.log(err));
