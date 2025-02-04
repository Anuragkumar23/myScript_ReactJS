import React from 'react'
import { useState } from "react";
import Cart from "./Cart"

export default function Shopping() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => {
        setClick(true)
    }
    
    if (click) {
        return (
            <Cart user = {user}/>
        )
    }
    return (
    <>
    <h1>Shopping Component</h1>

    <button onCLick = {handleClick}>Cart</button>
    </>
    )
}