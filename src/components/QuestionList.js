import QuestionListItem from "./QuestionListItem";

const QuestionList = ({ title, questions, showQuestion }) => {
    const items = questions.map(q => (
        <QuestionListItem
            key={q.id}
            question={q}
            showQuestion={() => showQuestion(q.id)} />));
    
    return (
        <div className="question-list">
            <h1>{title}</h1>
            <div className="question-list-items">
                {items}
            </div>
        </div>);
};

export default QuestionList;