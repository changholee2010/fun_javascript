// 변수 선언.
// ES6(2015) 이전.
var name = "Hong";
var name = "Hwang"; // 중복선언가능(문제가 될수 있음). window객체에 속성.

// ES6 이후.
//let name = "Hong";
let age = 10; // 중복선언 불가.
age = 20; // 재할당이 가능.

const myAge = 30;
// myAge = 31; // 상수변수에는 재할당이 불가.

let my_age = 10; // createElement() != createelement()
// console.log(window); // window 객체(웹브라우저).

let liTag = document.createElement("li"); // 객체를 반환.
liTag = {};

// 자료형(Data Type). => 원시자료형.
let loginID = 10; // number
loginID = "user01"; // string
loginID = true; // boolean
loginID = null; // object

let loginPw; // undefined
// loginPw = new Symbol();

// 자바.
// int myAge = 10;

// 객체. 복합자료형.
// const myInfo = new Object(); // 객체선언.
const myInfo = {
  name: "Hong",
  age: 20,
  phone: "010-1111-2222",
  showInfo: function () {
    console.log(`이름은 ${this.name}, 연락처는 ${this.phone}`);
  },
}; // 객체 리터럴.

// 객체의 속성
console.log(myInfo.name);
console.log(myInfo["phone"]);
myInfo.showInfo(); // myInfo.showInfo() 메소드. 비교) document.createElement()

// 속성값 변경.
myInfo["name"] = "Hwang";
myInfo.phone = "010-2222-3333";
myInfo.showInfo();

// 복사.
// 원시유형.
let hisAge = 20;
let yourAge = hisAge; // 값을 저장.
hisAge = 21;
yourAge = 21;
console.log(yourAge);
// 객체.
let hisInfo = {
  name: "Park",
  age: 20,
};
let yourInfo = hisInfo; // 객체의 주소값을 참조.
// hisInfo 값 변경.
// hisInfo.name = "Choi";
// hisInfo.age = 30;
hisInfo = {
  name: "Park",
  age: 20,
};

yourInfo = Object.assign({}, hisInfo); // 값을 복사.
// hisInfo 값 변경.
hisInfo.name = "Choi";
hisInfo.age = 30;
// yourInfo = hisInfo; // 주소복사와는 다름.
console.log(yourInfo); // 서로 다른 객체.

// for .. in
console.log("객체의 속성/값.....");
for (let prop in hisInfo) {
  console.log(prop, hisInfo[prop]);
}

// 배열.
const fruitBasket = ["Apple", "Banana", "Melon"];
fruitBasket[0] = "사과";
fruitBasket[3] = "Cherry";
// 메소드.
fruitBasket.push("Grape");
fruitBasket.unshift("Corn");
fruitBasket.pop();
fruitBasket.shift();

// 사과, Banana, Melon, Cherry
fruitBasket.splice(2, 0, "Grape"); // 인덱스, 크기, 대체할 값.
// 사과, Banana, Grape, Melon, Cherry

fruitBasket.splice(3, 1); // 인덱스, 크기, 대체할 값.
// 사과, Banana, Grape, Cherry

fruitBasket.splice(0, 2, "Banana", "사과"); // 인덱스, 크기, 대체할 값.
// Banana, 사과, Grape, Cherry

// for .. of
for (let elem of fruitBasket) {
  console.log(elem);
}
