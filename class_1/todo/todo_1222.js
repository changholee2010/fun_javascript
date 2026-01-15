// 객체(Object).
// 붕어빵틀(클래스) -> 실체 -> 붕어빵(인스턴스)
class People {
  // 속성(생성자).
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 기능(메소드)
  showInfo() {
    console.log(`이름은 ${this.name}, 나이는 ${this.age}`);
  }
}
const person1 = new People("홍길동", 20); // 인스턴스 생성.

// 인스턴스 생성.
const obj = {
  name: "Hong",
  age: 20,
  showInfo: function () {
    console.log(``);
  },
};

// 내장객체, Document Object Model, Browser Object Model, 사용자 정의 객체.
