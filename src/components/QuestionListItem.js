const QuestionListItem = ({ question, showQuestion }) => {
    const { author, id, timestamp } = question;
    const date = new Date(timestamp).toLocaleString();

    const handleClick = e => showQuestion();

    return (
        <div className="question-item" title={id}>
            <h2>{author}</h2>
            <h4>{date}</h4>
            <button
                className="question-button"
                onClick={handleClick}>
                Show
            </button>
        </div>);
};

export default QuestionListItem;