// 15-2, 15-3 장을 정독.
// git 설치.
// Dev/fun_javascript = git clone git주소.
// 이름, 연락처, 주소 정보를 입력하면
// 콘솔에 "이름은 홍길동, 전화번호는 010-1212-3434, 주소는 대구 중구 100번지"
// git add .
// git commit -m "12/17 숙제완료"
// git push -u origin main

let name = prompt("이름을 입력:");
let phone = prompt("연락처를 입력:");
let address = prompt("주소를 입력:");

console.log(`이름은 ${name}, 전화번호는 ${phone}, 주소는 ${address}`);
