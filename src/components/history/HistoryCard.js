import React from "react";
import { v4 as uuidv4 } from 'uuid'
import HistoryList from "./HistoryList";

export default function HistoryCard(props){
    return(
        <div className="card-body" style={{ display: props.navBarState ? "block" : "none" }}>
          <HistoryList history_array={props.history_array} key={uuidv4()}/>
        </div>
    )
}