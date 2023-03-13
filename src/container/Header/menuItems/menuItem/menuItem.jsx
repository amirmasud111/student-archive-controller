import React from "react";
import "./menuItem.css";
import { NavLink } from 'react-router-dom'

const MenuItem = (props) => {

    return (
        <li className="menuItem">
            <NavLink exact to={props.link} activeClassName="active" activeStyle={{color:"red",curser:"pointer"}} >
                {props.children}
            </NavLink>
        </li>
    )

}

export default MenuItem;