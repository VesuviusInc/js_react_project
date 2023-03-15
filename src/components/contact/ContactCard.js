import React from "react";
import ContactAdd from "./ContactAdd";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from 'uuid'

export default function ContactCard(props){
    function handleAddClick(){
        if(props.contactAdd === false){
          console.log(document.getElementsByClassName("c_add")[0])
          props.setContactAdd(true)
          document.getElementsByClassName("c_add")[0].innerHTML = "-"
        }
        else{
          props.setContactAdd(false)
          document.getElementsByClassName("c_add")[0].innerHTML = "+"
        }
      }
    return(
        <div className="card-body" style={{ display: props.navBarState ? "none" : "block" }}>
            <div className="row">
            <div className="col-1"/>
            <div className="col-10 text-left">Neuer Kontakt</div>
            <div className="col-1 c_add" onClick={handleAddClick}>+</div>
            </div>
            <ContactAdd contact_add={props.setContactArray} cAdd={props.contactAdd} contact_array={props.contactArray} key={uuidv4()}/>
            <ContactList contact_array={props.contactArray} contact_add={props.setContactArray} setHistory={props.setHistory} key={uuidv4()}/> 
      </div>
    )
}