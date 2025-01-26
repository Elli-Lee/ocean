/**
 * 기본 타입 간의 호환성
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
// dog = animal;

type ProgrammingBook = {
  // 서브타입
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;

type Book = {
  // 슈퍼타입
  name: string;
  price: number;
};

let book2: Book = {
  // 초과 프로퍼티 검사
  name: "한 입 크기 리액트",
  price: 33000,
  // skill: "reactjs"
};
