import "./sidebar.css"
import {LineStyle, Message, ListAlt} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyle />
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Message />
                        Messages
                    </li>
                    <li className="sidebarListItem">
                        <ListAlt />
                        To-Do
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
