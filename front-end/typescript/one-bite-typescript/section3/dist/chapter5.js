/**
 * 타입 추론
 */
let a = 10;
let b = "helllo";
let c = {
    id: 1,
    name: "이유진",
    profile: {
        nickname: "elli",
    },
};
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];
function func() {
    return "hello";
}
function func2(message = "hello") {
    return "hello";
}
let d; // 여기까진 d를 암묵적 any로 추론
d = 10; // 이제부터 d를 숫자로 추론
d.toFixed(); // d를 숫자로 추론하기 때문에 toFixed() 가능
d = "hello"; // 이 순간부터는 d를 string으로 추론
d.toUpperCase();
// d.toFixed()  // 불가. string이 대입된 순간부터는 d를 string 으로 추론
const num = 10;
let arr = [1, "string"];
export {};
