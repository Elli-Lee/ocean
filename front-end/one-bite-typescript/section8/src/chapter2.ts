/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  // key의 타입은 "name" | "age" 로 추론됨
  return person[key];
}

const person: Person = {
  name: "이유진",
  age: 28,
};

getPropertyKey(person, "name"); // "이유진"
