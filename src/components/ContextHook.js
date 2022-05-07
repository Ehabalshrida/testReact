import React,{useState} from 'react'


export const Context=React.createContext();
const ContextProvider=Context.Provider;

function ContextHook(props) {

const [Value,setvalue]= useState({id:1,Name:"ali"})


  return (<ContextProvider value={Value}>
{props.children}
  </ContextProvider>

  )
}
export default ContextHook;