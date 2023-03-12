import React from "react";
import { useState } from "react";

export default function ContactAdd(props){
    const [contact, setContact] = useState({vname: "", nname: "" , email: "", telenr: "", pb: ""});

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setContact((prev) => {
            if(name === "vname"){
                return {vname: value, nname: prev.nname , email: prev.email, telenr: prev.telenr, pb: prev.pb}
            }
            if(name === "nname"){
                return {vname: prev.vname, nname: value , email: prev.email, telenr: prev.telenr, pb: prev.pb}
            }
            if(name === "email"){
                return {vname: prev.vname, nname: prev.nname , email: value, telenr: prev.telenr, pb: prev.pb}
            }
            if(name === "telenr"){
                return {vname: prev.vname, nname: prev.nname , email: prev.email, telenr: value, pb: prev.pb}
            }
            if(name === "pb"){
                return {vname: prev.vname, nname: prev.nname , email: prev.email, telenr: prev.telenr, pb: value}
            }
        })
    }

    function addContactList(){
        setContact((prev) => {return{vname: prev.vname, nname: prev.nname , email: prev.email, telenr: prev.telenr, pb: prev.telenr, id: props.contact_array.length}})
        props.contact_add(state =>[...state, contact])
    }
    return (
        <div style={{ display: props.cAdd ? "block" : "none" }}>
            <div className="input-group">
                <span className="input-group-text">Vor- und Nachname</span>
                <input type="text" aria-label="First name" className="form-control" onChange={handleChange} value={contact.vname} name="vname"/>
                <input type="text" aria-label="Last name" className="form-control" onChange={handleChange} value={contact.nname} name="nname"/>
            </div>
            <p></p>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">E-Mail</span>
                <input type="text" className="form-control" aria-label="email" aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={contact.email} name="email"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Telfeonnr.</span>
                <input type="text" className="form-control" aria-label="telfonnr" aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={contact.telenr} name="telenr"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Profilbild</span>
                <input type="text" className="form-control" aria-label="progilbild" aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={contact.pb} name="pb"/>
            </div>
            <button type="button" className="btn btn-info" onClick={addContactList}>Submit</button>
        </div>
    )
}