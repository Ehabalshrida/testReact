import React ,{useState,useEffect}from 'react'

 function Hooks({title,age}) {

const [products,setproducts]=useState([{id:1,name:"ali"},{id:2,name:"hasan"}])
const [Name,setName]=useState("")
const updateProduct=()=>{
    setproducts([...products,
    {id:3,name:"yahia"}])
}
useEffect(()=>{
    console.log("hello All")
},[Name])
  return (
    <div>
    {/* {props.name}<br/>
    
    {props.age} */}
    {title}<br/>
    {products.map(item=>{
        return (<div  key={item.id}>{item.name}</div>)
    })}<br/>
    <button onClick={updateProduct}> ClickMe</button><br/>
    <input type="text" onChange={(e)=>{setName(e.target.value)}}/>

    <br/>
    {age}
    <br/>
    {Name}
    </div>
  )
}
export default Hooks;
