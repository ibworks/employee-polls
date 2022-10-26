import QuestionList from "./QuestionList";

const Dashboard = ({ user, questions, showQuestion }) => {
    if (!user || !questions) return null;
    
    const { id } = user;
    const unanswered = questions.filter(q => !q.optionOne.votes.join(q.optionTwo).includes(id));
    const answered = questions.filter(q => q.optionOne.votes.join(q.optionTwo).includes(id));
    
    return (
        <div className="dashboard">
            <QuestionList title="New Questions" questions={unanswered} showQuestion={showQuestion} />
            <QuestionList title="Done" questions={answered} showQuestion={showQuestion} />
        </div>);
};

export default Dashboard;