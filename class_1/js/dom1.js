// dom1.js
console.log(document.querySelectorAll("div#detail>ul>li"));
// 1.element node, 2.text node <li id="first">Apple</li>
// 3.attribute node

for (let item of list) {
  // element node를 만드는 메소드: createElement()
  let liTag = document.createElement("li"); // <li></li>
  liTag.innerText = item; // <li>Apple</li>

  // ul에 자식요소로 등록.  <ul>...<li>Apple</li></ul>
  document.querySelector("div#detail>ul").appendChild(liTag);
}
