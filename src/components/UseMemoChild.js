import React,{memo} from 'react'
 function UseMemoChild({count}) {
    console.log("Ehab")
  return (
    <div>UseMemoChild
        {count}
    </div>
  )
}

export default memo(UseMemoChild)