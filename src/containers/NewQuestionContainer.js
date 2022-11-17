import React from "react";
import { connect } from 'react-redux'
import NewQuestion from "../components/NewQuestion";
import { useNavigate } from "react-router-dom";
import { QuestionActions } from "../actions";

const NewQuestionContainer = ({ authedUser, save }) => {
    
    const navigate = useNavigate();
        
    const handleSubmit = (options) => {
        save({
            author: authedUser.id,
            optionOneText: options[0],
            optionTwoText: options[1],
        });
        navigate("/");
    }

    return <NewQuestion onSubmit={handleSubmit} />;
}

const mapStateToProps = state => ({
    authedUser: state.users.authedUser,
});

export default connect(mapStateToProps, {save: QuestionActions.save})(NewQuestionContainer)