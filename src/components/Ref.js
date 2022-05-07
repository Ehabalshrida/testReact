import React, { Component,createRef } from 'react'

 class Ref extends Component {
constructor(props){
super(props)
// this.inputField=createRef()
this.callback=null;
}
callbackFun=(ele)=>{
this.callback=ele;
}

// componentDidMount() { 
//     this.inputFeild.current.focus();
//     console.log( this.inputField) 
//  }
componentDidMount() { 

    if(this.callback){
        this.callback.focus();
    }
 }
  render() {
    return (
      <div>
          {/* <input type="text" ref={this.inputFeild}/> */}
          <input type="text" ref={this.callbackFun}/>



      </div>
    )
  }
}
export default Ref