import React, {useEffect,useState} from 'react';
import axios from 'axios';
function UseApi(api) {
  const [loading,setLoading]=useState(false) 
  const[users,setUsers]=useState([])
  const[err,setErr]=useState(null) 
  
  useEffect(()=>{
      setLoading(true)
      axios.get(api).then(res=>{
          setUsers(res.data)
          setLoading(false)

      }).catch(er=>{
          setErr(er.message)

      })

  },[])
    
    
    
    
    
    return [loading,users,err]
            
        
    
}

export default UseApi;