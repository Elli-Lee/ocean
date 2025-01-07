/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age: number;
  //   sayHi: () => void;
  sayHi(): void;
}
const person: Person = {
  name: "이유진",
  age: 28,
  // property에 저장된 값이 함수 -> 메서드
  sayHi: function () {
    console.log("Hi");
  },
};
