import React ,{useState}from 'react'
import UseMemoChild from './UseMemoChild'
export default function() {

const [count,setCount]=useState(0)
  return (
    <div>
        {count}<br/>
        <button onClick={()=>{setCount(count+1)}}>Click</button>

        <UseMemoChild count={count}/>
    </div>
  )
}
