import React from 'react'
import { useState } from "react";
import Payment from "./Payment"

export default function Cart() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => {
        setClick(true)
    }
    
    if (click) {
        return (
            <Payment user = {user}/>
        )
    }
    return (
    <>
    <h1>Cart Component</h1>

    <button onCLick = {handleClick}>Payment</button>
    </>
    )
}