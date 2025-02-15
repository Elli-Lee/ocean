/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
 */
// value => Date
function func(value) {
    if (typeof value === "number") {
        console.log(value.toFixed()); // value 는 number로 추론됨
    }
    else if (typeof value === "string") {
        console.log(value.toUpperCase()); // value는 string으로 추론됨
    }
    else if (typeof value === "object") {
        console.log(value.getTime());
    }
}
export {};
