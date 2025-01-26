import { useEffect } from "react";
const Even = () => {
  useEffect(() => {
    // useEffect의 콜백함수가 반환하는 함수: 클린업 함수
    return () => {
      console.log("unMount");
    };
  }, []);
  return <div>짝수지롱~</div>;
};

export default Even;
