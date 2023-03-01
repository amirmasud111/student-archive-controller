import React from "react";
import "./sidebar.css";
import Logo from "../../../components/logo/Logo";
import MenuItems from "../menuItems/menuItems";
import Button from "../../../components/UI/buttons/button";
import Backdrop from "../../../components/UI/backdrop/backdrop";

const Sidebar = (props) => {
    let classes = ["sidebar", "close"];
    if (props.show) {
        classes = ["sidebar", "open"]
    }
    return (
        <>
            <Backdrop show={props.show} modalClose={props.closeSideBar} />
            <div className={classes.join(" ")}>
                <Logo height="40px" />
                <nav>
                    <MenuItems />
                </nav>
                <div className="boxButton" btnType="danger" clicked={() => {

                }}>
                    <Button>ورود و ثبت نام</Button>
                </div>

            </div>
        </>

    )
}

export default Sidebar;