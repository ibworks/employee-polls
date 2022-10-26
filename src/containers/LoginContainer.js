import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {logInAs} from '../actions/users';
import Login from "../components/Login";

const LoginContainer = ({ users, logInAs }) => (
    <Login users={users} logInAs={(id) => {
        logInAs(id)
    }} />
)

LoginContainer.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    logInAs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    users: state.users.allUsers
})
  
export default connect(
    mapStateToProps,
    { logInAs }
)(LoginContainer)