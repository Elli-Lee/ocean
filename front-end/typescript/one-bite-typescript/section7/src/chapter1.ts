function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([1, 2, 3]); // 1

let str = returnFirstValue([1, "Hello", "myname", "is"]);
// number로 추론됨

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); //3
let var2 = getLength("12345"); //5
let var3 = getLength({ length: 10 }); //10

let var4 = getLength(10); // 타입스크립트가 오류 감지 못함
