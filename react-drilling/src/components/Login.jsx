import React from 'react'
import { useState } from "react";
import Shopping from "./Shopping"

export default function Login() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => {
        setClick(true)
    }
    
    if (click) {
        return (
            <Shopping user = {user}/>
        )
    }
    return (
    <>
    <h1>Login Component</h1>
    <h3>{user.username} {user.balance}</h3>
    <button onCLick = {handleClick}>Shopping</button>
    </>
    )
}