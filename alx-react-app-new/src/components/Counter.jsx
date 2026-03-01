import { useState } from "react";

function Counter() {
  // Initialize state with 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p>Current Count: {count}</p>

      {/* Button to increase the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Button to decrease the count */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      {/* Button to set the count back to 0 */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
