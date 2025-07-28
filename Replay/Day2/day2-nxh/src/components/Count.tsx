import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count là state

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Bấm tôi!</button>
    </div>
  );
}

export default Counter;
