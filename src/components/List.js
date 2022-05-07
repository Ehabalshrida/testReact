import React, { Component } from 'react'
import {Link}from"react-router-dom"
import Item from './Item'
class List extends Component {
    constructor(props){
        super(props)
        this.state={list:[{id:1,name:"ali"},{id:2,name:"hasan"},{id:3,name:"omar"}]

        }
    }
  render() {

    return (
      <div>
          {this.state.list.map((item)=>{
              return(<>
<Link to={`/item/${item.id}`} key={item.id}>{item.name}</Link><br/>
{/* <Item id={item.id} name={item.name}/> */}
</>
)
          })
          }
      </div>
    )
  }
}

export default  List