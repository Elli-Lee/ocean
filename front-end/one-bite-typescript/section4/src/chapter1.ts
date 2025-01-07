/**
 * 함수 타입 표현식
 */

// 타입 별칭으로 함수 타입 지정
type Operation = (a: number, b: number) => number;

// const add = (a:number, b: number) => a + b;
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
};
