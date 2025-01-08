/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~ 때문에 실패");
  }, 3000);
});

promise.then((response) => {
  // response에는 resolve에서 인수로 전달한 값이 들어옴
  console.log(response * 10); //20
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 내용",
      });
    }, 3000);
  });
}
