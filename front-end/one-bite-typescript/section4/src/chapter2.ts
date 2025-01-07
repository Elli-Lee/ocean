/**
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 반환 값의 타입이 호환되는가
 * 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;    -> number 타입 > number 리터럴 타입  : 다운캐스팅이어서 불가

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 매개변수를 기준으로 타입 호환을 판단할 때 업캐스팅일 때는 불가, 다운 캐스팅일때는 가능

// c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 불가
dogFunc = animalFunc;

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;
