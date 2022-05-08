import React ,{useState,useCallback,useMemo}from 'react'
import UseMemoChild from './UseMemoChild'
export default function() {
/*notes:
- useMemo, useCallback ,used for increase the performance
- any rerender for parent==> rerender for any child "Problem"
solution: use memo as higher order component so no rerender for child
just if there is any update occure on the child related to render of the parent
to make sure that there is update on child you have to pass values to child from parent

- if you have passed function to child, any rerender on parent will cause a rerender on child
"Proplem"
solution: useCallback to catch the function so its will not reinitialized and repass to child
- useMemo : to catch value 
*/
const [count,setCount]=useState(0)
const [user,setUser]=useState(0);
const [data,setdata]=useState(0);

const output=useMemo(()=>{
let number=0;
for(let i=0;i<2020020200;i++){
  number++;
}
return number;

})
const update=useCallback(()=>{
  setUser(user+1)
},[user])



  return (
    <div>
        {count}<br/>
        <button onClick={()=>{setCount(count+1)}}>count</button><br/>
        <button onClick={()=>{setdata(data+2)}}>data</button><br/>
        user {user}<br/>
        Data {data}<br/>
        OutPut_-_ {output}<br/>




        <UseMemoChild count={count} update={update}/>
    </div>
  )
}
