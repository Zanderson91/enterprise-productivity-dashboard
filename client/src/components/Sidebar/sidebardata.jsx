import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

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
    path: "/to-do",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "NewsFeed",
    path: "/news",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
