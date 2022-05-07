import React ,{useEffect,useLayoutEffect,useState,useRef}from 'react'
import axios from "axios"
export default function UseLayouyEffect() {

const [user,setUser]=useState([]);
const refrence=useRef("ali")

//  useLayoutEffect(()=>{
//     axios.get("http://jsonplaceholder.typicode.com/users").then(res=>{
        
// setUser(res.data)})

//  })
  useEffect(()=>{
//     axios.get("http://jsonplaceholder.typicode.com/users").then(res=>{
        
// setUser(res.data)})
console.log(refrence.current.value)

 },[])

  return (
    <div>{
        user.map(item=>{
            return(<div key={item.id}>{item.name}</div>)
        })}
        
<input type="text" ref={refrence}/>
        </div>
  )
}
