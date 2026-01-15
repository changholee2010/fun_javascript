// 함수.

// 함수정의(sumArray);
function sumArray(ary = []) {
  // 배열요소의 합을 반환.
  let sum = 0;
  for (let num of ary) {
    sum += num;
  }
  return sum; // 반환.
}

let result = sumArray([1, 2, 3, 4, 5]);
console.log(`결과값은 ${result}`);

// 정의: 함수표현식.
const getMax = function (ary = []) {
  // 배열요소에서 max값을 반환.
  let max = 0;
  for (let elem of ary) {
    if (max < elem) {
      max = elem; // max값보다 elem가 크면 max에 할당.
    }
  }
  return max;
};
result = getMax([45, 12, 33, 20, 5]);
console.log(`결과값은 ${result}`);

// 정의: 화살표함수.
// 매개변수중에서 작은 값 반환.
const getMin = (n1, n2) => (n1 > n2 ? n2 : n1);
result = getMin(23, 17);
console.log(`결과값은 ${result}`);

// 39, 40p.

// 함수,배열,객체 => 평균나이를 구하는 함수.
function getAverageAge(persons = []) {
  // 객체 배열을 매개값으로 받아서 평균나이를 반환.
  if (!Array.isArray(persons)) {
    return 0; // 배열이아니면...0을 반환하고 종료.
  }
  let sum = 0; // 합계에 사용할 변수 선언.
  for (let elem of persons) {
    sum += elem["age"];
  }
  const avg = sum / persons.length; // 평균계산.
  return avg; // 결과를 반환.
}

const manyPeople = [
  { name: "홍길동", age: 20 },
  { name: "박민수", age: 33 },
  { name: "최태영", age: 27 },
  { name: "홍성식", age: 17 },
];

// 함수호출.
result = getAverageAge(manyPeople);
console.log(`결과값은 ${result}`);

// json문자열 데이터.
const jsonData = `[{"id":1,"first_name":"Christy","last_name":"Tanfield","email":"ctanfield0@pen.io","gender":"Male","salary":10187},
{"id":2,"first_name":"Tatum","last_name":"Buxton","email":"tbuxton1@china.com.cn","gender":"Female","salary":11936},
{"id":3,"first_name":"Emmye","last_name":"Penwright","email":"epenwright2@networkadvertising.org","gender":"Female","salary":15206},
{"id":4,"first_name":"Lorenza","last_name":"Rudolph","email":"lrudolph3@barnesandnoble.com","gender":"Female","salary":13002},
{"id":5,"first_name":"Dennison","last_name":"Reyner","email":"dreyner4@nps.gov","gender":"Bigender","salary":3749},
{"id":6,"first_name":"Valli","last_name":"Grinham","email":"vgrinham5@netvibes.com","gender":"Female","salary":13268},
{"id":7,"first_name":"Chrotoem","last_name":"Eastcourt","email":"ceastcourt6@webnode.com","gender":"Non-binary","salary":8617},
{"id":8,"first_name":"Camella","last_name":"Prahm","email":"cprahm7@sina.com.cn","gender":"Polygender","salary":2419},
{"id":9,"first_name":"Ewan","last_name":"Monte","email":"emonte8@oracle.com","gender":"Male","salary":15051},
{"id":10,"first_name":"Allister","last_name":"Hawksworth","email":"ahawksworth9@stumbleupon.com","gender":"Male","salary":11057},
{"id":11,"first_name":"Tobey","last_name":"Callery","email":"tcallerya@smh.com.au","gender":"Female","salary":2061},
{"id":12,"first_name":"Kirby","last_name":"Whitby","email":"kwhitbyb@goodreads.com","gender":"Male","salary":10243},
{"id":13,"first_name":"Lelah","last_name":"Greed","email":"lgreedc@google.fr","gender":"Female","salary":9861},
{"id":14,"first_name":"Raf","last_name":"Dows","email":"rdowsd@va.gov","gender":"Female","salary":14547},
{"id":15,"first_name":"Gwendolin","last_name":"Olennikov","email":"golennikove@amazon.de","gender":"Female","salary":19596}]`;

const memberAry = JSON.parse(jsonData); // 문자열 -> 객체 변환.
console.log(memberAry);

let sum = 0; // memberAry급여 합.
let sumOfMale = 0; // Gender가 'Male'인 합계.
let avg = 0; // 전체평균.
let avgOfMale = 0; // 남자평균.
let cntOfMale = 0; // 남자인원.

for (let elem of memberAry) {
  sum += elem.salary; // 전체합계.
  if (elem.gender == "Male") {
    sumOfMale += elem.salary;
    cntOfMale++; // 남자 몇명인지 카운트.
  }
}

console.log(
  `전체 급여합계는 ${sum}
  , 전체 평균급여는 ${sum / memberAry.length}
  , 남자 합계급여는 ${sumOfMale}
  , 남자 평균급여는 ${sumOfMale / cntOfMale}`
);
