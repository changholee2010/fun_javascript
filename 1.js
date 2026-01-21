function orderFood(menu) {
  return new Promise((resolve, reject) => {
    console.log(`${menu} 주문 접수!`);

    setTimeout(() => {
      if (menu === "라면") {
        resolve("라면 완성!");
      } else {
        reject("재료가 없습니다 😢");
      }
    }, 2000);
  });
}

orderFood("라면")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

/////////////////////

function cook() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("요리 중...");
      resolve("요리 완료");
    }, 1500);
  });
}

function serve() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("서빙 중...");
      resolve("손님에게 전달!");
    }, 1000);
  });
}

orderFood("라면")
  .then(() => cook())
  .then(() => serve())
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

////////////////////// asysnc/await
async function run() {
  try {
    await orderFood("라면");
    await cook();
    const result = await serve();
    console.log(result);
  } catch (err) {
    console.log("에러:", err);
  }
}

run();

///////////// 병렬처리.
function washDish() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("설거지 완료");
      resolve("data1");
    }, 2000);
  });
}

function makeDrink() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("음료 완성");
      resolve("data2");
    }, 1000);
  });
}

Promise.all([washDish(), makeDrink()]) //
  .then((...data) => {
    console.log(data);
    console.log("모든 작업 완료!");
  });

//////////////// 실패처리.
function payment(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      money >= 5000 ? resolve("결제 완료") : reject("잔액 부족");
    }, 1000);
  });
}

payment(3000)
  .then((msg) => console.log(msg))
  .catch((err) => console.log("실패:", err));
