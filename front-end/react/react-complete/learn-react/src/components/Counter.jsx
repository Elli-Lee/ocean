import { useState } from "react";

const Counter = ({ onTotal }) => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    if (onTotal) {
      onTotal();
    }
  };

  return <button onClick={handleCounter}> counter: {counter} </button>;
};

export default Counter;
