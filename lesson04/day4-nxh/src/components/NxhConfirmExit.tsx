import React, { useEffect } from "react";
export default function NxhConfirmExit() 
{
    useEffect(() => {
        const handleBeforeUnload = (event: any) => {
            event.preventDefault();
            event.returnValue = "Bạn có chắc chắn muốn thoát chứ";
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);
    return (
        <div className= 'alert alert-success'>
            <p>Confirm Exit</p>
        </div>
    )
}