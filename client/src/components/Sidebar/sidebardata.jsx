import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {ToDo} from "../toDoCard/toDoCard"


export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "To-Do",
    path: "/ToDoList",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Messages",
    path: "/#",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "NewsFeed",
    path: "/#",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Logout",
    path: "/login",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
