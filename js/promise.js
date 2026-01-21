// promise 객체.
// 1) pending 2) fulfilled 3) rejected 상태.

const promise = new Promise(function (resolve, reject) {
  console.log("promise 생성.");
  resolve("OK");
});

// 비동기처리.
promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });

let count = 1; // 2배 -> 더하기3 -> 빼기1 => 출력.

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    count = count * 2;
    resolve(count);
  }, 1000); // 1)실행함수 2)인터벌.
});
p1.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count = data;
      count = count + 3;
      resolve(count);
    }, 1000); // 1)실행함수 2)인터벌.
  });
})
  .then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        count = data;
        count = count - 1;
        resolve(count);
      }, 1000); // 1)실행함수 2)인터벌.
    });
  })
  .then((data) => {
    setTimeout(() => {
      count = data;
      console.log(`count는 ${count}`);
    }, 10); // 1)실행함수 2)인터벌.
  });
