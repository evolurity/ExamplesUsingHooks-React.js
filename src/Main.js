import React from "react";
import {useAlert} from "./alert/AlertContext";

export default function Main() {

    const {show} = useAlert()

    return (
        <>
            <h1>Hello from Example with useContext</h1>
            <button className="btn btn-success" onClick={() => show('hello from useReducer example')}>Show alert
            </button>
        </>
    )
}