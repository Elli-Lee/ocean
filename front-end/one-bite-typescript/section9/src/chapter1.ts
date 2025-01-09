/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
// number로 추정될 것을 예상했으나 number | string
let c: StringNumberSwitch<number | string>;

// 타입 변수에 유니온 타입을 전달할 경우 각 타입이 하나씩 전달된 후 유니온으로 묶인다
// StringNumberSwitch<number> | StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;

/**
 * 실용적인 예제
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
