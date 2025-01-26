/**
 * infer
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string
type B = ReturnType<FuncB>; // number
type C = ReturnType<number>; // infer 다음에 오는 타입을 추론할 수 없으면 never

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<any> ? any : never;
// 1. T는 프로미스 타입이어야 한다
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
