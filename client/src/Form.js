
import React, { Component } from "react";
import Axios from 'axios'
import { Link } from "react-router-dom";
export default class Form extends Component {
  state = {
    contact: {
     
    },
  };
  componentDidMount = () => {
    this.getContact();
  };
  getContact = () => {
    Axios.get(`/contact-list-one/${this.props.id}`).then((res) => {
      this.setState({
        contact: res.data,
      });
    });
  };
  handlechange=(e)=>{
    this.setState({

    })
  }
  editContact=()=>{
      this.props.handleEdit(this.state.contact._id,{id:this.state.contact._id,name: this.state.contact.name,
        age: this.state.contact.age,
        tel: this.state.contact.tel})
    //   Axios.put(`/contact-list/${this.state.contact._id}`,{id:this.state.contact._id,name: this.state.contact.name,
    //     age: this.state.contact.age,
    //     tel: this.state.contact.tel})
  }
  render() {
    return (
      <div>
        <input type="text" name="name" onChange={(e)=>this.setState({
            contact:{...this.state.contact,name:e.target.value}
        })} value={this.state.contact.name} />
        <input type="text" name="age" onChange={(e)=>this.setState({
            contact:{...this.state.contact,age:e.target.value}
        })} value={this.state.contact.age} />
        <input type="text" name="tel" onChange={(e)=>this.setState({
            contact:{...this.state.contact,tel:e.target.value}
        })} value={this.state.contact.tel} />
        <Link to="/contact-list"> <button onClick={this.editContact} >Edit</button></Link>
      </div>
    );
  }
}
