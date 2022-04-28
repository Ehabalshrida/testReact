import React, { Component } from 'react';

class Select extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                <input id="name"type="text" onChange={this.props.handleChange}/>
                <select id="option" onChange={this.props.handleChange}> 
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
                <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Select;