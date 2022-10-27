import QuestionList from "./QuestionList";

const Dashboard = ({ user, questions, showQuestion }) => {
    if (!user || !questions) return null;
    
    const { id } = user;
    const isAnswered = (q) => {
        return q.optionOne.votes.concat(q.optionTwo.votes).includes(id);
    }
    const unanswered = questions.filter(q=>!isAnswered(q));
    const answered = questions.filter(q=>isAnswered(q));
    
    return (
        <div className="dashboard">
            <QuestionList title="New Questions" questions={unanswered} showQuestion={showQuestion} />
            <QuestionList title="Done" questions={answered} showQuestion={showQuestion} />
        </div>);
};

export default Dashboard;