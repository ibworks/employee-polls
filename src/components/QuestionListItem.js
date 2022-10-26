const QuestionListItem = ({ question, showQuestion }) => {
    const { author, timestamp } = question;
    const date = new Date(timestamp * 1000).toLocaleString();

    const handleClick = e => showQuestion();

    return (
        <div className="question-item">
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