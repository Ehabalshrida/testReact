import React, { Component } from 'react'
import { ContextConsumer } from './Context'
export default class  extends Component {
  render() {
    return (
        <ContextConsumer>
            {
            (ele)=>{
                console.log(ele.name)
                console.log(ele.age)


                return(<div>{ele.name}<br/>
                {ele.age}</div>
          
                )}
                    }
      
      </ContextConsumer>
    )
  }
}
