/**
 * 대수 타입 -> 합집합과 교집합 타입
 */

import { StringLiteral } from "../../../../../../node_modules/typescript/lib/typescript";

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number;
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true];

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union1 : Union1 = {
//     name: "",
// }

/**
 * 2. 교집합 타입 - intersection 타입
 */

let variable: number & string; // never 타입
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};
