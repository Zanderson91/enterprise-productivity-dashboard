import React from "react";
import "./navbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="topLeft">
                    <span className="logo">Welcome to your Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="navbarIcon">
                        <NotificationsNone />
                        <span className="topIconNotif">2</span>
                    </div>
                    <div className="navbarIcon">
                        <Language />
                        <span className="topIconNotif">2</span>
                    </div>
                    <div className="navbarIcon">
                        <Settings />
                    </div>
                </div>
            </div>
        </div>
    )
}
