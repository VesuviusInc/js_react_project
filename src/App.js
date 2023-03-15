import { useState } from 'react';
import './App.css';
import ContactCard from './components/contact/ContactCard';
import NavBar from './components/NavBar';
import { v4 as uuidv4 } from 'uuid'
import HistoryCard from './components/history/HistoryCard';

export default function App(props) {
  const [contactAdd, setContactAdd] = useState(false)
  const [contactArray, setContactArray] = useState([
    {
    "id": uuidv4(),
    "email": "michael.lawson@reqres.in",
    "vname": "Michael",
    "nname": "Lawson",
    "pb": "https://reqres.in/img/faces/7-image.jpg",
    "telenr": 123154
    },
    {
    "id": uuidv4(),
    "email": "lindsay.ferguson@reqres.in",
    "vname": "Lindsay",
    "nname": "Ferguson",
    "pb": "https://reqres.in/img/faces/8-image.jpg",
    "telenr": 123,
    }])
  const [history, setHistory] = useState([])

  return (
    <div className="App card">
      <div className="card-header">Contacts
        <NavBar navBarState={props.navBarState}/>
      </div>
        <ContactCard navBarState={props.navBarState} contactArray={contactArray} setContactArray={setContactArray} contactAdd={contactAdd} setContactAdd={setContactAdd} setHistory={setHistory}/>
        <HistoryCard navBarState={props.navBarState} history_array={history}/>
    </div>
  );
}
