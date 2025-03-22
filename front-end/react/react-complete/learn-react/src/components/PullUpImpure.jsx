let counter = 10;
function PullUpImpure() {
  counter = counter + 1;
  console.log(counter);
  // 내부에서 전역변수를 1씩 증가했기 때문에 결과가 다르게 출력됨 > 순수하지 않은 컴포넌트
  return <p>나는 턱걸이를 {counter}개 했다. </p>;
}

export default PullUpImpure;
