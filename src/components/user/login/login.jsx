import React from "react";
import "./login.css";
import Logo from "../../../assets/images/logoStudent.jpg";
import Button from "../../UI/buttons/button";

const Login = () => {
    return (
        <>
            <img src={Logo}></img>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <Button>ورود</Button>
        </>
    )
}

export default Login