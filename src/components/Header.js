import { Link } from "react-router-dom";

const Header = ({ loggedInUser, logOut }) => {
    if (!loggedInUser) return null;

    return (
        <div className="header">
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                <Link to="/add">New</Link>
            </div>
            <div className="user-menu">
                <img className="avatar-small" src={loggedInUser.avatarURL} alt="Avatar" />
                <span>{loggedInUser.id}</span>
                <Link to="/login" onClick={logOut}>Log out</Link>
            </div>
        </div>);
};

export default Header;