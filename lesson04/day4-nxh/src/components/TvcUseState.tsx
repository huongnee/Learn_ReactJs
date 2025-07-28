import React, { useState } from "react";

export default function TvcUseState() 
{
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Bạn đã bấm {count} lần</p>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <button onClick={() => setCount(count - 1)}>Giảm</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}