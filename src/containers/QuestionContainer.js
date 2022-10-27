import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import Question from "../components/Question";
import { useNavigate, useParams } from "react-router-dom";
import { QuestionActions } from "../actions";

const QuestionContainer = ({ answerQuestion, loggedInUser, questions, users }) => {
    const [answer, setAnswer] = useState(0);
    const [createdByUser, setCreatedByUser] = useState(null);
    const [question, setQuestion] = useState(null);

    const navigate = useNavigate();
    const params = useParams();
    const { id: questionId } = params;
    const { id: userId } = loggedInUser;
    
    useEffect(() => { 
        const filteredQuestions = questions.filter(q => q.id === questionId);
        const _question = filteredQuestions.length === 0 ? null : filteredQuestions[0];

        if (!_question) {
            navigate("/notFound");
        } else {
            setQuestion(_question);
        }

    }, [navigate, questionId, questions]);

    useEffect(() => { 
        if (question === null) {
            setCreatedByUser(null);
        }
        else {
            const filteredUsers = users.filter(u => u.id === question.author);
            const createdBy = filteredUsers.length === 0 ? null : filteredUsers[0];

            setCreatedByUser(createdBy);
        }
        
    }, [question, users]);

    useEffect(() => { 
        const _answer = question === null ? 0
            : question.optionOne.votes.includes(userId) ? 1
                : question.optionTwo.votes.includes(userId) ? 2
                    : 0;
        
        setAnswer(_answer);
    }, [question, userId]);
    
    const handleSubmit = (option) => {
        answerQuestion(questionId, userId, option);
        navigate("/");
    }


    return question === null || createdByUser === null
        ? null
        : (<Question answer={answer} createdByUser={createdByUser} question={question} onSubmit={handleSubmit} />);
}

const mapStateToProps = state => ({
    questions: state.questions.all,
    users: state.users.all,
    loggedInUser: state.users.loggedInUser,
});

export default connect(mapStateToProps, {answerQuestion: QuestionActions.answer})(QuestionContainer)