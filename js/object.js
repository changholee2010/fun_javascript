// object.js
// 객체(object).
// 자동차 vs. 소나타 234버12345
// 학생(정의) vs. 1학년1반 3번 학생(실체)
// 학생번호, 이름, 반, 생년월일, 키, 몸무게......밥먹기,공부한다,게임한다,....

class Student {
  constructor(sno, sname, birth) {
    this.sno = sno;
    this.sname = sname;
    this.birth = birth;
  } // 생성자.
  showInfo() {
    console.log(`학번은 ${this.sno}, 이름은 ${this.sname}`);
  }
  showBirth() {
    console.log(`${this.sname}의 생일은 ${this.birth}`);
  }
}
// function Student(sno, sname, birth) {
//   this.sno = sno;
//   this.sname = sname;
//   this.birth = birth;
// }

const hong = new Student("11-1", "홍길동", "2006-03-04"); // 인스턴스 생성.
const hwang = new Student("11-3", "황인호", "2006-08-04"); // 인스턴스 생성.
const park = {
  sno: "11-2",
  sname: "박호억",
  birth: "2006-07-09",
  showInfo: function () {
    console.log(`학번은 ${this.sno}, 이름은 ${this.sname}`);
  },
};
// 클래스에 추가기능.
Student.prototype.allInfo = function () {
  console.log(`학번은 ${this.sno}, 이름은 ${this.sname}, 생일은 ${this.birth}`);
};

// 클래스 => 객체.
hong.showInfo();
hong.showBirth();
hong.fullInfo = function () {
  console.log(`학번은 ${this.sno}, 이름은 ${this.sname}, 생일은 ${this.birth}`);
};
hong.allInfo();
//
hwang.showInfo();
hwang.allInfo();

// 객체정의.
park.showInfo();
// park.showBirth();

// prototype.
const now = new Date();
console.log(now.toLocaleDateString());

Date.prototype.toLocalFormat = function () {
  // 2026-04-02 13:22:34 포맷.
  const yyyy = this.getFullYear();
  const mm = this.getMonth() + 1;
  const dd = this.getDate();
  const hh = this.getHours();
  const mi = this.getMinutes();
  const ss = this.getSeconds();

  return `${yyyy}-${("0" + mm).slice(-2)}-${dd} ${hh}:${mi}:${ss}`;
};
console.log(now.toLocalFormat());
