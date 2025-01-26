// 배열과 튜플

let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["Hello", "Elli"];

let boolArr: Array<boolean> = [true, false, true];
// 꺽쇠를 열고 다른 타입을 지정하는 것: 제네릭

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 타입
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["이유진", 1],
  ["삼유진", 2],
  ["이무진", 3],
];
