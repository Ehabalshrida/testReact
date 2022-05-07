import { type } from '@testing-library/user-event/dist/type'
import React,{useReducer,useEffect,useState} from 'react'
import axios from 'axios'



const initialState={
    Users:[]
   }
   
   const reducer=(state=initialState,action)=>{
       console.log(action.payload,"<><><>>",action.type)
   switch(action.type){
   
   case ("insert"):
       return {Users:[... state.Users,...action.payload]}
       
   default:
       return state;
   }
   
       }
export default function UseReducer() {
    const[flag,setFlag]=useState(false)


const[state,dispatch]=useReducer(reducer,initialState)
console.log(state)
useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users").then(res=>{
        dispatch({type:"insert",payload:res.data})
        console.log(res.data)})
       .then(()=>{ setFlag(true)
        console.log(flag)
       
    })
    
},[])




  return (
    <div>
         {console.log( state.Users)}
        {
           
           flag&&state.Users.map(item=>{
                return(<div key={item.id}>{item.name}*</div>)
            })
        }
    </div>
  )
}
