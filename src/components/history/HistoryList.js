import React from "react";

import HistoryElement from "./HistoryElement";

export default function HistoryList(props){
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
                    date={history.date}
                    id={history.id}
                />
            </li>
        )
    }
    return(
      <ul className="list-group list-group-flush overflow-auto his">
        {props.history_array.map(createHistoryElement)}
      </ul>
    )
}