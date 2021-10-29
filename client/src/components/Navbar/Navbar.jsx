import React, {useState} from "react";
import "./navbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Sidebar from "../Sidebar/sidebar"
import { Redirect } from "react-router-dom"
import { Button } from "semantic-ui-react"
import Logout from "../Logout/Logout"


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <Sidebar />
        <div className="topLeft">
          <span className="logo">Welcome to your Dashboard</span>
        </div>
        <div className="topRight">
          <div className="navbarIcon">
            <Logout />
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
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
            className="profilePhoto"
          />
        </div>
      </div>
    </div>
  );
}
