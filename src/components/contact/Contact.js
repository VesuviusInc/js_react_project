import React from "react";

export default function Contact(props){
    function handleDelete(){
        props.c_array_add(props.c_array.filter(function(el) { return el.id !== props.id; }) )
        props.setHistory(state =>[...state, props.c_array.filter(function(el) { return el.id === props.id; })])
    }
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
                        <div className="col-1 delete" onClick={handleDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
