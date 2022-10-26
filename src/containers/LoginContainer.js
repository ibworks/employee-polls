import React , { useEffect }from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {logInAs} from '../actions/users';
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

const LoginContainer = ({ loggedInUser, logInAs, users }) => {
    const navigate = useNavigate();

    useEffect(() => { 
        if (loggedInUser) {
            navigate("/");
        }
    }, [loggedInUser, navigate]);

    return (
    <Login users={users} logInAs={(id) => {
        logInAs(id)
    }} />
)}

LoginContainer.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    logInAs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    loggedInUser: state.users.loggedInUser,
    users: state.users.allUsers
})
  
export default connect(
    mapStateToProps,
    { logInAs }
)(LoginContainer)