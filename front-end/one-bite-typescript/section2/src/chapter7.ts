// void -> 아무것도 없음

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;

// never 타입
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// let a: never;
