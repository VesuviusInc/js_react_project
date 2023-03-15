import React from "react";

import HistoryList from "./HistoryList";

export default function HistoryCard(props){
    return(
        <div className="card-body" style={{ display: props.navBarState ? "block" : "none" }}>
          <HistoryList history_array={props.history_array}/>
        </div>
    )
}