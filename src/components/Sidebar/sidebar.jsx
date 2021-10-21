import "./sidebar.css"
import {LineStyle, Message, ListAlt} from "@material-ui/icons"

export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <LineStyle classname="sideIcon" />
                Home
              </li>
              <li className="sidebarListItem">
                <Message classname="sideIcon" />
                Messages
              </li>
              <li className="sidebarListItem">
                <ListAlt classname="sideIcon" />
                To-Do
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h4 className="title">Favorites</h4>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <LineStyle classname="sideIcon" />
                Home
              </li>
              <li className="sidebarListItem">
                <Message classname="sideIcon" />
                Messages
              </li>
              <li className="sidebarListItem">
                <ListAlt classname="sideIcon" />
                To-Do
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h4 className="title">Apps</h4>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <LineStyle classname="sideIcon" />
                Home
              </li>
              <li className="sidebarListItem">
                <Message classname="sideIcon" />
                Messages
              </li>
              <li className="sidebarListItem">
                <ListAlt classname="sideIcon" />
                To-Do
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h4 className="title">More Options</h4>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <LineStyle classname="sideIcon" />
                Home
              </li>
              <li className="sidebarListItem">
                <Message classname="sideIcon" />
                Messages
              </li>
              <li className="sidebarListItem">
                <ListAlt classname="sideIcon" />
                To-Do
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}
