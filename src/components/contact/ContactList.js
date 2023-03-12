import React from "react";

import Contact from "./Contact";

export default function ContactList(props){
    function createContact(contact){
        return (
            <li className="list-group-item">
                <Contact
                key={contact.id}
                email={contact.email}
                vorname={contact.vname}
                nachname={contact.nname}
                pb={contact.pb}
                telenr={contact.telenr}
                id={contact.id}
                c_array={props.contact_array}
                c_array_add={props.contact_add}
                setHistory={props.setHistory}
                />
            </li>
        )
    }

    return(
        <ul className="list-group list-group-flush">
          {props.contact_array.map(createContact)}
        </ul>
    )
}
