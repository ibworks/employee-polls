import React from "react";
import { connect } from 'react-redux'
import Question from "../components/Question";
import { useParams } from "react-router-dom";

const QuestionContainer = ({ questions }) => {
    const params = useParams();
    const { id } = params;
    const filtered = questions.filter(q => q.id === id);
    const question = filtered.length === 0 ? null : filtered[0];

    return (<Question question={question} submit={e => console.log({e})} />);
}


const mapStateToProps = state => ({
    questions: state.questions.allQuestions
})
  
export default connect(mapStateToProps, null)(QuestionContainer)