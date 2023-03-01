import React from "react";
import "./menuItems.css";
import MenuItem from "./menuItem/menuItem";

const MenuItems = () => {

    return (
        <ul className="menuItems">
            <MenuItem link="/" active>
                صفحه اصلی
            </MenuItem>
            <MenuItem link="/">
                صفحه دانش آموزان
            </MenuItem>
        </ul>
    )

}

export default MenuItems;