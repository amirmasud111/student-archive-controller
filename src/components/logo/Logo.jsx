import React from "react";
import "./logo.css";
import logoStudent from "../../assets/images/logoStudent.jpg";


const Logo = (props) => {

    return (
        <div className="logo" style={{ height: props.height }}>
            <img
                src={logoStudent}
            />
        </div>
    )
}

export default React.memo(Logo);