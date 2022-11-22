import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.value);
  const increment = () => {
    
    setCount(count + props.counter);
  };
  const decrease = () => {
    
    setCount(count - props.counter);
  };

  return (
    <div>
      Counter:{count}
      <button onClick={increment}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;