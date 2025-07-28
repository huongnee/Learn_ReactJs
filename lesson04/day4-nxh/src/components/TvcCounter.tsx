import React, { useReducer, useState } from "react";
const initalState = { count: 0 };

function reducer(state: any, action: any) 
{
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return initalState;
        default:
            throw new Error();
    }
}
export default function TvcCounter()
{
    const [state , dispatch] = useReducer(reducer,initalState);

    return(
        <div className= 'alert alert-success'>
            <p>Bạn đã bấm {state.count} lần</p>
            <button onClick={() => dispatch({ type: "increment" })}>Tăng</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Giảm</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>  
    );
}