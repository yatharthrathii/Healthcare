import "./Sidebar.css";
import { FiHome, FiClock, FiCalendar, FiUsers, FiBarChart2, FiActivity, FiMessageCircle, FiSettings } from "react-icons/fi";

const navItems = [
    { label: "Dashboard", icon: <FiHome /> },
    { label: "History", icon: <FiClock /> },
    { label: "Calendar", icon: <FiCalendar /> },
    { label: "Appointments", icon: <FiUsers /> },
    { label: "Statistics", icon: <FiBarChart2 /> },
    { label: "Tests", icon: <FiActivity /> },
    { label: "Chat", icon: <FiMessageCircle /> },
    { label: "Support", icon: <FiMessageCircle /> },
    { label: "Setting", icon: <FiSettings /> },
];

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h3 className="sidebar-title">General</h3>
            <ul className="sidebar-nav">
                {navItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                        <span className="icon">{item.icon}</span>
                        <span className="label">{item.label}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
