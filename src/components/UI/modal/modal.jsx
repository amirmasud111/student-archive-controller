import React from "react";
import "./modal.css";
import Backdrop from "../backdrop/backdrop";

const Modal = (props) => {
    return (
        <>
            <Backdrop show={props.show} modalClose={props.modalClose} />
            <div className="modal"
                style={{
                    transform: props.show ? "scale(100%)" : "scale(0)",
                    opacity: props.show ? "1" : "0"
                }}
            >
                {props.children}
            </div>
        </>
    )
}

export default React.memo(Modal);