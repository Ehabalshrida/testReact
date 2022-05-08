import React,{memo} from 'react'
 function UseMemoChild(props) {
    console.log("Ehab")
  return (
    <div>UseMemoChild
        {props.count}        
<button onClick={()=>{props.update()}}>update</button>
    {/* <button></button> */}
    </div>
  )
}

export default memo(UseMemoChild)