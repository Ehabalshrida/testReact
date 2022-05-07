import React,{useContext} from 'react'
import { Context } from './ContextHook';
 function ConsumerContext() {
    const ConsumeContext=useContext(Context)

  return (<>
  {ConsumeContext.Name}<br/>
  hello
  {ConsumeContext.id}

  </>
  )
}
export default ConsumerContext;