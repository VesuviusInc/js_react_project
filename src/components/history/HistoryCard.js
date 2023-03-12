import React from "react";

import HistoryElement from "./HistoryElement";

export default function HistoryCard(props){
    function createHistoryElement(history){
        return (
            <li className="list-group-item">
                <HistoryElement
                    key={history.id}
                    email={history.email}
                    vorname={history.vname}
                    nachname={history.nname}
                    pb={history.pb}
                    telenr={history.telenr}
                />
            </li>
        )
    }
    return(
        
    <div className="card-body" style={{ display: props.navBarState ? "block" : "none" }}>
      <ul className="list-group list-group-flush">
        {props.history_array.map(createHistoryElement)}
      </ul>
    </div>
    )
}