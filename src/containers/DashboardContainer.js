import React from "react";
import { connect } from 'react-redux'
import Dashboard from "../components/Dashboard";
import { useNavigate } from "react-router-dom";

const DashboardContainer = ({ user, questions }) => {
    const navigate = useNavigate();
    const showQuestion = id => navigate(`/question/${id}`);

    return (
        <Dashboard
            className="dashboard"
            user={user}
            questions={questions}
            showQuestion={showQuestion} />
    );
}

const mapStateToProps = state => ({
    user: state.users.loggedInUser,
    questions: state.questions.allQuestions,
})

export default connect(
    mapStateToProps,
    null
)(DashboardContainer)