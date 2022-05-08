import React, { Component } from 'react';
import {useNavigate,Link,Outlet}from "react-router-dom";

function Acount 
() {

 
    const rout=useNavigate();

        return (
            <div>
                account
                {/* <button onClick={()=>{rout('/')}}>BackToHome</button> */}<br/>
             <Link to="/">BackToHome</Link>
             
             <Link to="nes"> Nested</Link>
                <Outlet/>

            </div>
        );
   
}

export default Acount;