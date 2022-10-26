import React from "react";
import { connect } from 'react-redux'
import {QuestionActions} from '../actions';
import { useNavigate } from "react-router-dom";

const AddContainer = ({ add }) => {
    const navigate = useNavigate();
    const handleSubmit = (question) => {
        add(question);
        navigate("/");
    }
    

    return (
    <div>Add</div>
)}

const mapStateToProps = state => ({
    loggedInUser: state.users.loggedInUser,
})

export default connect(mapStateToProps, { add: QuestionActions.add })(AddContainer)