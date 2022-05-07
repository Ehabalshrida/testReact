import React ,{useEffect,useRef,useState}from 'react'

// useRef :use to define a aflag that will be used to point to any element by using ref properity 
export default function UseRef() {
const [user,setUser]=useState("")
const Ref =useRef();

useEffect(()=>{
   console.log( Ref.current.value);
},[user])


  return (
    <div>UseRef
        <br/>
        <input type="text" ref={Ref} onChange={(e)=>{setUser(e.target.value)}}/>

    </div>
  )
}

