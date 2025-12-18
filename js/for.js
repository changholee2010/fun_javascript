// for.js
let sum = 0; // 값을 누적.

// 1 ~ 5 까지 숫자를 sum 누적.

sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;

sum = 0; // 초기화.

for (let i = 1; i <= 100; i++) {
  sum += i;
  // console.log(`sum => ${sum}, i => ${i}`);
}

console.log(`최종합계 : ${sum}`);
