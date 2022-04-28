import React, { Component } from "react";
import Element from "./Element";
import Select from "./Select";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      option: "",
      name: "",
      item: { id: 0, name: "" },
      newobj: { Option: "", name: "" },
      flag: false,
    };
  }
  handleChange = async (e) => {
    console.log(e.target.id);
    console.log(e.target.value);

    await this.setState({ [e.target.id]: e.target.value, flag: false });
    console.log(this.state.name + " firstConsole   " + this.state.option);

    await this.setState({
      newobj: { name: this.state.name, option: this.state.option },
    });

    console.log(this.state.newobj.name + "    " + this.state.newobj.option);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("from Submit Form");
    this.setState({ flag: true });
  };

  addItem = (e) => {
    this.setState({ item: { id: Math.random(), name: e.target.value } });
    //console.log(this.state.item)
  };
  submitForn = async (e) => {
    e.preventDefault();
    // let products2=[...this.state.products,this.state.item]
    //   console.log("products2"+"     "+products2)

    await this.setState({
      products: [...this.state.products, this.state.item],
    });
    console.log("products" + "          " + this.state.products);
    e.target.elements[0].value = "";
  };

  deletMethod = (id) => {
    console.log("From Delete Method");
    let newList = [];
    this.state.products.map((item) => {
      if (item.id != id) {
        newList.push(item);
      }
    });
    this.setState({ products: newList });
  };
  render() {
    return (
      <div>
        {this.state.flag && (
          <div>
            {this.state.newobj.name}
            <br />
            {this.state.newobj.option}
          </div>
        )}
        {/* 
                <ol>

                 {this.state.products.length>0 && this.state.products.map(element=>{
                 return (<li>{element.name} {element.id} <button onClick={()=>{this.deletMethod(element.id)}}>Delete</button></li>)
                 })}
                 </ol>              
                <Element addItem={this.addItem} submitForn={this.submitForn} />   */}

        <Select
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Main;
