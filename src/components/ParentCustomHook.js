import React, { Component } from 'react';
import UseCustomHook from './UseCustomHook';
import UseCustomLog from './UseCustomLog';
import UseApi from './UseApi';
 function ParentCustomHook(){
const [count,increase,decrease]=UseCustomHook(0);
// UseCustomLog(count)
const [loading,users,err]=UseApi("https://jsonplaceholder.typicode.com/users")

return (<>
{loading&& console.log(loading+"loading")}<br/>
{users.length&& console.log(users,"users")}<br/>
{err&& console.log(err,"error")}<br/>

{/* 
<button onClick={increase}>+</button>
{count}
<button onClick={decrease}>-</button> */}

</>);


}
export default ParentCustomHook;