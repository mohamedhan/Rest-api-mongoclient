import React, { Component } from "react";
import Axios from "axios";
import {Link} from "react-router-dom"

export default class AddContact extends Component {
  state = {
    name: "",
    age: "",
    tel: "",
  };
  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
 
  render() {
    return (
      <div>
        <input type="text" onChange={this.handlechange} name="name" value={this.state.name} />
        <input type="text" onChange={this.handlechange} name="age" value={this.state.age}/>
        <input type="text" onChange={this.handlechange} name="tel" value={this.state.tel} />
      <Link to="/contact-list" >  <button onClick={()=>this.props.addContact(this.state)} >Add</button></Link>
      </div>
    );
  }
}
