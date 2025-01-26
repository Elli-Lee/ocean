/**
 * Unknown 타입
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = undefined;

  let unknownVar: unknown;
  // let num: number = unknownVar; // 다운캐스팅이 안됨
}

/**
 * Never 타입
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("Hi");
  }

  let voidVar: void = undefined;
}

/**
 * Any 타입
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar: anyVar;

  // neverVar = anyVar;
}
