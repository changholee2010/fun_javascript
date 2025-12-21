// 화살표함수(ES6).

// 데이터유형(객체, 배열)

// 이벤트.
// 화면영역에서 키보드 마우스 => 동작 - 이벤트 - 이벤트핸들러(함수)

// 친구(이름, 연락처, 생일: '08-20-12', 키: 163.5)
// 4명 생성 => friends 배열에 저장.
// 친구평균키: 175.3, 제일큰키: 184.2(홍길동)
// 테이블태그를 활용해서 document.write(); 그리기.

const friends = [
  { name: "친구1", phone: "010-1111-1111", birth: "08-01-01", height: 167.8 },
  { name: "친구2", phone: "010-2222-2222", birth: "08-02-01", height: 168.8 },
  { name: "친구3", phone: "010-3333-3333", birth: "08-03-01", height: 177.8 },
  { name: "친구4", phone: "010-4444-4444", birth: "08-04-01", height: 188.8 },
];

const avg = 0;
let maxHeight = 0;
let sumHeight = 0;
let fname = "";

for (let i = 0; i < friends.length; i++) {
  if (maxHeight < friends[i].height) {
    maxHeight = friends[i].height;
    fname = friends[i].name;
  }
  sumHeight += friends[i].height;
}

avg = sumHeight / friends.length;
console.log(`친구평균키: ${avg}, 제일큰키: ${maxHeight}(${fname})`);
