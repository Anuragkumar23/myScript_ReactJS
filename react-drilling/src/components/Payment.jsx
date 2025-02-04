import React from 'react'
import { useState } from 'react'

export default function Payment({user}) {
    const [click, setClick] = useState(false);

    const handleClick = ()=>{
        setClick(true)
    }
    
    if(click){
        return (
            <>
            <h1>Payment Component</h1>
    <h3>{user.username} {user.balance}</h3>
    <button onClick={handleClick}>Pay</button>
    <h3>{user.username},  Updated Balance: {user.balance-5000}</h3>
            </>
        )
    }
  return (
    <>
    <h1>Payment Component</h1>
    <h3>{user.username} {user.balance}</h3>
    <button onClick={handleClick}>Pay</button>
    </>
  )
}