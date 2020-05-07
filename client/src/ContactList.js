import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactList({contacts,handleDelete}) {
    
    return (
        <div>
            <div >
          {contacts.map(contact=> <div key={contact._id} style={{border:"1px solid red"}} >
          <p>{contact.name}</p>
          <p>{contact.age}</p>
          <div>
          <button onClick={()=>handleDelete(contact._id)} >Delete</button>
     <Link to={`/edit-contact/${contact._id}`} >   <button>Edit </button></Link>
          </div>
          </div>  )}
        </div>
        </div>
    )
}
