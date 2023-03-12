import { useState } from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

export default function App() {
  const [navBarState, setNavBarState] = useState(false)
  const [contactAdd, setContactAdd] = useState(false)
  const [contactArray, setContactArray] = useState([
    {
    "id": 0,
    "email": "michael.lawson@reqres.in",
    "vname": "Michael",
    "nname": "Lawson",
    "pb": "https://reqres.in/img/faces/7-image.jpg",
    "telenr": 123154
    },
    {
    "id": 1,
    "email": "lindsay.ferguson@reqres.in",
    "vname": "Lindsay",
    "nname": "Ferguson",
    "pb": "https://reqres.in/img/faces/8-image.jpg",
    "telenr": 123,
    }])
  

  function hNavBar(){
    setNavBarState(true)
    console.log(navBarState)
    document.getElementById("contact-nav-bar").classList.remove("active")
    document.getElementById("history-nav-bar").classList.add("active")
  }

  function cNavBar(){
    console.log(navBarState)
    setNavBarState(false)
    console.log(navBarState)
    document.getElementById("contact-nav-bar").classList.add("active")
    document.getElementById("history-nav-bar").classList.remove("active")
  }
  return (
    <div className="App card">
      <div className="card-header">Contacts
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link active" href aria-current="true" id="contact-nav-bar" onClick={cNavBar}>Contacts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href id="history-nav-bar" onClick={hNavBar}>History</a>
          </li>
        </ul>
      </div>
      <ContactCard navBarState={navBarState} contactArray={contactArray} setContactArray={setContactArray} contactAdd={contactAdd} setContactAdd={setContactAdd}/>
      <div className="card-body" style={{ display: navBarState ? "block" : "none" }}>
      <h1>aesdasds</h1>
      </div>
    </div>
  );
}
