// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// CJS 에 의해서 이 두 함수가 math 모듈 밖으로 내보내짐
// module.exports = {
//   add,
//   sub,
// };

export { add, sub };
