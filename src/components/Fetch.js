import React,{useEffect,useState} from 'react'
import axios from 'axios';
function Fetch() {
const [post,setPosts]=useState({})
const [id,setId]=useState(0);
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>{
    console.log(res.data)   
    setPosts(res.data)
    })
},[id])
console.log(post)   

  return (
    <div>
    {/* //     {posts.map(item=>{ */}
    {/* //         return (<div key={item.id}>{item.title}<br/> </div>) */}
    {/* //     })} */}
    <input type="number" min="1"onChange={(e)=>{setId(e.target.value)}}/>

    {post.id}-{post.title}
    </div>
  )
}
export default Fetch;