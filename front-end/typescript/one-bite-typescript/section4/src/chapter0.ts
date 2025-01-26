/**
 * 함수 타입 정의
 */

// 어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => a + b;

function introduce(name = "이유진", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") console.log(`tall: ${tall + 10}`);
}

introduce("이유진", 28);
