console.log(`function2 => `, ary1);

// 함수(member => tr>td:(id),td(fn),td(ln),td(salary))
function makeTr(member) {
  const fields = ["id", "first_name", "last_name", "salary"];
  const trTag = document.createElement("tr");
  // td*4 생성.
  for (let field of fields) {
    const tdTag = document.createElement("td"); // <td></td>
    tdTag.innerText = member[field];
    // appendChild.
    trTag.appendChild(tdTag);
  }
  // tr반환.
  return trTag;
}

// 멤버 수만큼 tr 생성.
const target = document.querySelector("#target");
let page = 2; // 1페이지
let pageSize = 10; // 페이지당 건수
let start = (page - 1) * pageSize; // 0
let end = start + pageSize; // 10
const pageAry = ary1.slice(start, end);

for (let elem of pageAry) {
  const newTr = makeTr(elem);
  target.appendChild(newTr);
}
