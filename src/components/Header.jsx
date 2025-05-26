import "./Header.css";
import { FiSearch } from "react-icons/fi";

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h1 className="logo"><span>Health</span>care.</h1>
                <div className="search-box">
                    <FiSearch className="search-icon" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header-right">
                <div className="notify-icon">🔔</div>
                <div className="header-name">
                    <img
                        src="/avatar.png"
                        alt="User avatar"
                        className="avatar"
                    />
                    <h1>Yatharth Rathi</h1>
                </div>
                <button className="add-btn">+</button>
            </div>
        </header>
    );
};

export default Header;
