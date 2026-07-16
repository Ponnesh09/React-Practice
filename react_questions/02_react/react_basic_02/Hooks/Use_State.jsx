// 1. useStateManages local state in a component to track data that changes over time.import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Use State </h1>
      <button onClick={() => setCount(count + 1)}>Count :{count}</button>
    </div>
  );
};

export default Counter;
