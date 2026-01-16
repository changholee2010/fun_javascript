let totalCnt = 100;
let page = 1; // 현재페이지.

//////////////////////// 함수들 ////////////////////////////
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

const pageSize = 5; // 페이지당 건수.

// 페이지별 목록보여주기.
function showPageList(pg = 1) {
  // 기존목록 지우기.
  target.innerHTML = "";

  let page = pg; // 페이지.
  let start = (page - 1) * pageSize; // 20
  let end = page * pageSize; // 30
  let pageAry = ary1.slice(start, end);

  // 배열의 건수만큼 화면출력.
  for (let elem of pageAry) {
    const newTr = makeTr(elem);
    target.appendChild(newTr);
  }
} // end of showPageList().
showPageList();

// 페이징목록 생성.
function generatePagingList() {
  // 기존목록 지우기.
  let ulPagination = document.querySelector("ul.pagination");
  ulPagination.innerHTML = "";

  let realEnd = Math.ceil(totalCnt / pageSize); // 건수계산 마지막페이지.
  let startPage = 1, // 시작페이지.
    endPage = 10; // 마지막페잊.
  let prev = false, // 이전페이지 여부.
    next = false; // 이후페이지 여부.

  // 현재페이지 기준으로 계산.
  endPage = Math.ceil(page / 10) * 10;
  startPage = endPage - 9;
  // 실제마지막 페이지보다 작음.
  endPage = endPage > realEnd ? realEnd : endPage;
  // 이전, 이후 페이지 계산.
  prev = startPage == 1 ? false : true;
  next = endPage < realEnd ? true : false;

  // 1 ~ 10 반복하면서
  // <li class="page-item"><a class="page-link" href="#">1</a></li>

  // <1. Previous>부분 생성.
  const prevStr = `<li class="page-item ${prev ? "" : "disabled"}">
                     <a class="page-link" href="${
                       prev ? "#" : ""
                     }" data-page="${startPage - 1}">Previous</a>
                   </li>`;
  ulPagination.insertAdjacentHTML("beforeend", prevStr);

  // 2. 페이지 수만큼 출력.
  for (let p = startPage; p <= endPage; p++) {
    const pageStr = `<li class="page-item ${p == page ? "active" : ""}"
                         aria-current=${p == page ? "page" : ""}
                     >
                       <a class="page-link" href="#" data-page="${p}">${p}</a>
                     </li>`;
    ulPagination.insertAdjacentHTML("beforeend", pageStr);
  }

  // <3. Next>부분 생성.
  const nextStr = `<li class="page-item ${next ? "" : "disabled"}">
                     <a class="page-link" data-page="${endPage + 1}"
                        href="${next ? "#" : ""}"
                     >Next</a>
                   </li>`;
  ulPagination.insertAdjacentHTML("beforeend", nextStr);
} // end of generatePagingList().
generatePagingList();

////////////////// 이벤트 //////////////////////
document.querySelector("ul.pagination").addEventListener("click", (e) => {
  // 클릭되는 대상 파악하기.
  let selectPage = 1;
  if (e.target.tagName == "A") {
    selectPage = e.target.dataset.page; // <a data-img="" data-page="1">1</a>
    // 페이징목록.
    page = selectPage;
    generatePagingList();
    // 페이지별 회원목록.
    showPageList(selectPage);
  }
});
