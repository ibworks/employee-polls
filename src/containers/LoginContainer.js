import React , { useEffect }from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {logInAs} from '../actions/users';
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

const LoginContainer = ({ authedUser, logInAs, users }) => {
    const navigate = useNavigate();

    useEffect(() => { 
        if (authedUser) {
            navigate("/");
        }
    }, [authedUser, navigate]);

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
    authedUser: state.users.authedUser,
    users: state.users.all
})
  
export default connect(
    mapStateToProps,
    { logInAs }
)(LoginContainer)