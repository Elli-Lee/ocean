/**
 * 제네릭
 */

function func(value: any) {
  return value;
}
let num = func(10);
// value 타입이 any여서 toUpperCase() 오류를 잡지 못함
num.toUpperCase();

function func2(value: unknown) {
  return value;
}
let num2 = func2(10);
// num2가 숫자인게 확실하지만 타입상 unknown이므로 toFixed() 메서드 사용 불가
// num2.toFixed();
if (typeof num2 === "number") {
  num2.toFixed();
}

//제네릭 함수
function genericFunc<T>(value: T): T {
  return value;
}

// 타입이 잘 추론됨
let genericNum = genericFunc(10);
let genericString = genericFunc("abcd");

let arr = genericFunc<[number, number, number]>([1, 2, 3]);
