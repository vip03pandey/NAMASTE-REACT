import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';

function User() {

    useEffect(()=>{
        console.log("Use Effect");
        const timer=setInterval(()=>{
            console.log("namaste react op")
        },1000);

        return ()=>{
            clearInterval(timer);
            console.log("useEffect return")
        }
    },[]);
    console.log("render");
  return (
    <div className='user-card'>
      <h2>Name: Vipul Pandey</h2>
      <h2>Location: Noida</h2>
      <h2>Contact : vipul03pandey@gmail.com</h2>
    </div>
  )
}

export default User
