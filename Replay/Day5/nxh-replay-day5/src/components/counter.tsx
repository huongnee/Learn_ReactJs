import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return <div>
    <div>giá trị là : {count}<br/> </div>
    <button onClick={() => setCount(count+1)}>Tăng</button>
    <button onClick={() => setCount(count-1)}>Giảm</button>
    </div>
}