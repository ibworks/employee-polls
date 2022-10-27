import { Link } from "react-router-dom";
import UserLabel from "./UserLabel";

const Header = ({ authedUser, logOut }) => {
    const loggedInContent = (
        <>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                <Link to="/add">New</Link>
            </div>
            <div className="user-menu">
                <UserLabel user={authedUser} />
                <Link to="/login" onClick={logOut}>Log out</Link>
            </div></>
    );
    return (
        <div className="header">
            {authedUser && loggedInContent}
        </div>);
};

export default Header;