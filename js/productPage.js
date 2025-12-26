// productPage.js
console.log(products);

// category 중복제거 후 배열에 저장.
let categories = [];
for (let i = 0; i < products.length; i++) {
  // 카테고리가 없을 때 추가.
  if (categories.indexOf(products[i].category) == -1) {
    categories.push(products[i].category);
  }
}
// 화면에 카테고리 추가.
const selectCategories = document.querySelector("select.categories");
categories.forEach((elem) => {
  // <option value='전자기기'>전자기기</option>
  let opt = document.createElement("option");
  opt.innerText = elem;
  opt.setAttribute("value", elem); // <option value='전자기기'>....
  selectCategories.appendChild(opt); // <select>하위요소등록.
});

// 목록출력.
const target = document.querySelector("#list"); // tbody의 dom정보.
showProductList(products);

////////// 이벤트 //////////////////
selectCategories.addEventListener("change", (e) => {
  const selectValue = e.target.value;
  // 카테고리 같은 상품만 배열에 저장.
  const filterProducts = products.filter(
    (elem) => elem.category == selectValue
  );
  // 함수호출.
  showProductList(filterProducts);
});

// '조회' 버튼을 클릭하면...
// filter 메소드를 활용해서 목록. showProductList함수를 활용해서 출력.

/////////// 함수 /////////////////////
function showProductList(productAry = []) {
  // 기존목록을 비우고...
  target.innerHTML = "";
  // 목록을 출력.
  productAry.forEach((elem) => {
    // elem.productCode, elem.productName.........
    // elem['productCode']
    let tr = document.createElement("tr");
    ["productCode", "productName", "purchasePrice", "category"] //
      .forEach((field) => {
        let td = document.createElement("td");
        td.innerText = elem[field]; //상품코드,상품명,가격,카테고리.
        tr.appendChild(td); // tr자식요소등록.
      });
    target.appendChild(tr); // tbody의 자식요소등록.
  });
}
