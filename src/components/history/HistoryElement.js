import React from "react";

export default function HistoryElement(props){
    return(
        <div className="card">
            <div className="card-body">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-2">
                            <div className="text-center">
                            <img src={props.pb} className="rounded" alt="..."></img>
                            </div>
                        </div>
                        <div className="col-9">
                            <h4>
                            {props.vorname} {props.nachname}
                            </h4>
                            <p>
                            {props.telenr}
                            </p>
                            <p>
                            {props.email}
                            </p>
                        </div>
                        <div className="col-1">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
