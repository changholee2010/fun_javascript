login("hong", function (user) {
  getUserInfo(user.id, function (info) {
    getPosts(info.id, function (posts) {
      render(posts, function () {
        console.log("화면 출력 완료!");
      });
    });
  });
});

function login(id, cb) {
  setTimeout(() => {
    console.log("로그인 성공1");
    cb({ id: 1 });
  }, 1000);
}

function getUserInfo(id, cb) {
  setTimeout(() => {
    console.log("회원 정보 조회");
    cb({ id });
  }, 1000);
}

function getPosts(id, cb) {
  setTimeout(() => {
    console.log("게시글 조회");
    cb(["글1", "글2"]);
  }, 1000);
}

function render(posts, cb) {
  setTimeout(() => {
    console.log("화면 렌더링:", posts);
    cb();
  }, 1000);
}

///////////////////개선.
function login(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("로그인 성공");
      resolve({ id: 1 });
    }, 1000);
  });
}

function getUserInfo(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("회원 정보 조회");
      resolve({ id });
    }, 1000);
  });
}

function getPosts(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("게시글 조회");
      resolve(["글1", "글2"]);
    }, 1000);
  });
}

function render(posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("화면 렌더링:", posts);
      resolve();
    }, 1000);
  });
}

// login("hong")
//   .then((user) => getUserInfo(user.id))
//   .then((info) => getPosts(info.id))
//   .then((posts) => render(posts))
//   .then(() => console.log("모든 작업 완료"))
//   .catch((err) => console.log("에러:", err));

async function run() {
  try {
    const user = await login("hong");
    const info = await getUserInfo(user.id);
    const posts = await getPosts(info.id);
    await render(posts);
    console.log("모든 작업 완료");
  } catch (err) {
    console.log("에러:", err);
  }
}

// run();
