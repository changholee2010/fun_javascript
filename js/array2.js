// array2.js
// 1. 회의용품 카테고리명 중 첫번째 상품명과 가격.
fetch("js/data3.json")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    const result = data.find((elem) => elem.상품카테고리 == "회의용품");
    console.log(
      `회의용품의 첫번째 상품은 ${result.상품명}이고, 가격은 ${result.가격} 원.`
    );
  })
  .catch((err) => console.log(err));
// 2. 판매자명이 펜스토어인 모든상품의 가격이 1000원 이상인지 판별.
fetch("js/data3.json")
  .then((resp) => resp.json())
  .then((data) => {
    const result = data
      .filter((elem) => elem.판매자정보.판매자명 == "펜스토어")
      .every((elem) => elem.가격 >= 1000);
    // every의 결과반환.
    if (result) {
      console.log("전부 1000원 이상입니다.");
    } else {
      console.log("1000원 이하인 상품도 있습니다.");
    }
  })
  .catch((err) => console.log(err));

// 3. 상품카테고리명이 필기구인 상품들의 평점이 4점을 넘는게 있는지 판별.
fetch("js/data3.json")
  .then((resp) => resp.json())
  .then((data) => {
    const result = data
      .reduce((acc, elem) => {
        if (elem.상품카테고리 == "필기구") {
          acc.push(elem);
        }
        return acc;
      }, [])
      .some((elem) => elem.평점 >= 4);
    // some의 결과반환.
    if (result) {
      console.log("4점이 넘는 상품이 있습니다.");
    } else {
      console.log("4점이 넘는 상품이 없습니다.");
    }
  })
  .catch((err) => console.log(err));
