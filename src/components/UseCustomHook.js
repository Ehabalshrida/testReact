import React, { useState } from 'react';
  function UseCustomHook(v) {
const[count,setCount]=useState(v);

const increase=()=>{
    setCount(count+1)
}

const decrease=()=>{
    setCount(count- 1)
}


   
        return [count,increase,decrease]
    
}

export default UseCustomHook;
