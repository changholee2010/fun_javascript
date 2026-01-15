// todo_1218.js

// Math.random() 활용. 31 ~ 100 생성.
// 5번 실행.
// 합계, 평균, 최대값 => "합계는 480, 평균 96, 최대 99"
// 함수 : scoreInfo.  => scoreInfo()

// & 몇번 실행 (10 매개값으로 받아서 10번 실행)
// scoreInfo(10)

// git add .
// git commit -m "18일 숙제완료"
// git push origin main

// 1 ~ 10 까지 정수를 합하는 반복문.
// 홀수값만 누적. 1,3,5,7,9/ 2,4,6,8,10
// "합계는 55"

// 함수: oddSum() 정의.
// 함수호출.

// 함수: sumUp() / 1 ~ 5 까지의 합. 반환.
// result 변수에 저장.

function scoreInfo() {
  let sum = 0;
  let avg = 0;
  let maxNumber = 0;
  for (let i = 1; i <= 5; i++) {
    let randomNum = Math.ceil(Math.random() * 70) + 30;
    sum += randomNum;
    if (maxNumber < randomNum) {
      maxNumber = randomNum;
    }
  }
  avg = sum / 5;
  console.log(`합계는 ${sum}, 평균 ${avg}, 최대 ${maxNumber}`);
}
scoreInfo();
