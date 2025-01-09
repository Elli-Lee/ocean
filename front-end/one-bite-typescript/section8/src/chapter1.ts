/**
 * 인덱스드 엑세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 프로퍼티 안의 프로퍼티 타입에 접근
// authorId: Post['author']['id']

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이유진",
    age: 27,
  },
};

// 배열 타입
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// PostList배열타입에서 Post의 타입 추출하기
// Detail, List의 타입을 한번에 정리할 수 있겠다
// 배열타입[number]로 가져오면 하나의 요소만 가져올 수 있다.

const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이유진",
    age: 27,
  },
};

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 튜플과 함께 사용하기
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number]; // number, string, boolean 유니온으로 추론
