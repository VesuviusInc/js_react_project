import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props){
    return(
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            {props.navBarState?<Link to={"/"} className="nav-link" href aria-current="true" id="contact-nav-bar">Kontakte</Link>:<Link to={"/"} className="nav-link active" href aria-current="true" id="contact-nav-bar">Contacts</Link>}
          </li>
          <li className="nav-item">
          {props.navBarState?<Link to={"/history"} className="nav-link active" href aria-current="true" id="contact-nav-bar">History</Link>:<Link to={"/history"} className="nav-link" href aria-current="true" id="contact-nav-bar">History</Link>}
          </li>
        </ul>
    )
}