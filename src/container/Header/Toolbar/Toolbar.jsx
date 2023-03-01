import React, { useState } from "react";
import "./Toolbar.css";
import Logo from "../../../components/logo/Logo";
import MenuItems from "../menuItems/menuItems";
import Button from "../../../components/UI/buttons/button";
import Modal from "../../../components/UI/modal/modal";
import Login from "../../../components/user/login/login";
import Sidebar from "../sidebar/sidebar";

const Toolbar = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [openSideBar, setOpenSideBar] = useState(false);
    const modalHandler = () => {
        setShowModal(true);
    }
    const modalClose = () => {
        setShowModal(false);
    }
    const sideBarHandler = () => {
        setOpenSideBar(true)
    }
    const closeSideBar = () => {
        setOpenSideBar(false)
    }
    return (

        <header className="toolbar">
            <Sidebar show={openSideBar} closeSideBar={closeSideBar}/>
            <div className="showMenu" onClick={sideBarHandler}>
                Open sideBar
            </div>
            <div className="showNav">
                <Logo height="80%" />
                <nav>
                    <MenuItems></MenuItems>
                </nav>
                <Button btnType="danger" clicked={modalHandler}>ورود</Button>
            </div>



            <Modal show={showModal} modalClose={modalClose}>
                <Login />
            </Modal>

        </header>
    )
}

export default Toolbar;