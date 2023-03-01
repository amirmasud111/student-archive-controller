import React from "react";
import "./backdrop.css";

const Backdrop = (props) => (
    props.show ? <div className="backdrop" onClick={props.modalClose}></div> : null
)

export default Backdrop;