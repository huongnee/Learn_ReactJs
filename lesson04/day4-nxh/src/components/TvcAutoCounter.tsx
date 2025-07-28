import React, { useEffect, useState } from "react";
export default function TvcAutoCounter() 
{
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer: any;
        if(running){
            timer = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [running]);
    return (
        <div className= 'alert alert-success'>
            <p>Bạn đã bấm {count} lần</p>
            <button onClick={() => setRunning(!running)}>
                {running ? "Dừng" : "Bắt đầu"}
            </button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}