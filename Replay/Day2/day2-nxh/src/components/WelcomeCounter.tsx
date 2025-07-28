import React, { useState } from 'react';

type Props = {
  name: string;
};

const WelcomeCounter: React.FC<Props> = ({ name }) => {
  const [count, setCount] = useState(0); // State: số lần bấm

  return (
    <div style={{ border: '1px solid #ccc', padding: 20, width: 300, marginBottom: 20 }}>
      <h2>Xin chào, {name}!</h2> {/* dùng props */}
      <p>Bạn đã được chào {count} lần.</p> {/* dùng state */}
      <button onClick={() => setCount(count + 1)}>Chào thêm lần nữa</button>
    </div>
  );
};

export default WelcomeCounter;
