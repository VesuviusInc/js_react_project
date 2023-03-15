import React from "react";

export default function HistoryElement(props){
    return(
        <div className="card deleted">
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
                            Tel.: {props.telenr}
                            </p>
                            <p>
                            E-Mail: {props.email}
                            </p>
                            <p>
                                Deleted at: {props.date}
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
