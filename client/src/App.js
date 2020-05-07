import React, { Component } from "react";
import axios from "axios";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Form from "./Form"
export default class App extends Component {
  state = {
    contacts: [],
  };
  componentDidMount = () => {
    this.getContacts()
  };
  getContacts=()=>{
    axios.get("/contact-list").then((res) => {
      this.setState({
        contacts: res.data,
      });
    });
  }
  handleDelete = (key) => {
    axios.delete(`/contact-list/${key}`);
    this.getContacts()

  };
  addContact=(contact)=>{
    axios.post("/contact-list",contact)
    this.getContacts()

    
}
handleEdit=(id,contact)=>{
  axios.put(`/contact-list/${id}`,contact)
  this.getContacts()
}
getPerson=(contact)=>{
  this.setState({})
}
  render() {
    const { contacts } = this.state;
    return (
      <BrowserRouter>
        <div>
         <center> <Link to="/contact-list">
            <button>Contact list</button>
          </Link>
          <Link to="/add-contact">
            <button>Add Contact</button>
          </Link></center>
          <Route path="/contact-list">
            <ContactList contacts={this.state.contacts} handleDelete={this.handleDelete}  />{" "}
          </Route>
          <Route path={"/edit-contact/:id"} render={(props)=><Form  id={props.match.params.id} handleEdit={this.handleEdit}  />} ></Route>
          <div>
            <Route path="/add-contact">
              {" "}
              <AddContact addContact={this.addContact}/>
            </Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
