// 2. STATE & INTERACTION COMPONENT
// This component manages its own internal "state" using the useState Hook.

import React, { useState } from "react";

const Counter = () => {
  // Declare a state variable named "count", initialized to 0
  // "setCount" is the function used to update this specific state

  const [count, setCount] = useState(0);

  return <div class="card">

    <h3>Interactive state counter</h3>
    <p> current count {count}</p>
        {/* add event listener */}
        <button onClick={()=>{setCount(count + 1)}}>Increment Count</button>
  </div>;
};

export default Counter;
