import React, { Component } from 'react';

class Element extends Component {
    render() {
        return (
            <div>
                <form onSubmit={(e)=>{{this.props.submitForn(e)}}}>
                <input type="text"onChange={(e)=>{this.props.addItem(e)}}/><br/>
                <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Element;