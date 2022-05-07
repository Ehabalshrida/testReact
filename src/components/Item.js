import React, { Component } from 'react'

class Item extends Component {
  render() {
console.log(this.props)
    return (
      <div><br/>{this.props.keys}
      </div>
    )
  }
}
export default Item

