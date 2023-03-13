import React from "react";
import "./menuItems.css";
import MenuItem from "./menuItem/menuItem";

const MenuItems = () => {

    return (
        <ul className="menuItems">
            <MenuItem link="/">
                صفحه اصلی
            </MenuItem>
            <MenuItem link={{
                pathname:"/add-student",
                search:"?sort=name",
                hash:"#the-hash"
            }}
            >
                اضافه کردن دانش آموزان
            </MenuItem>
        </ul>
    )

}

export default MenuItems;