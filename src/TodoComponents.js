import React from "react"
import './style.css';

function CheckBox(props) {
    return (
        <div className="todo-item">
        <input type="checkbox" name={props.key} value={props.key}></input>
        <label>{props.component.text}</label>
        </div>
    )
  }
  
export default CheckBox