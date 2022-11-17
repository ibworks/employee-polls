import { useState } from "react";
import QuestionList from "./QuestionList";

const Dashboard = ({ user, questions, showQuestion }) => {
    const [index, setIndex] = useState(0);

    if (!user || !questions) return null;
    
    const { id } = user;
    const isAnswered = (q) => {
        return q.optionOne.votes.concat(q.optionTwo.votes).includes(id);
    }
    const unanswered = questions.filter(q=>!isAnswered(q));
    const answered = questions.filter(q=>isAnswered(q));
    
    return (
        <div className="dashboard">
            <div className="toggle">
                <input id="r1" name="answer" type="radio" defaultChecked={index === 0} onClick={e => setIndex(0)} /> 
                <label for="r1">New</label>
                <input id="r2" name="answer" type="radio" defaultChecked={index === 1} onClick={e => setIndex(1)} /> 
                <label for="r2">Completed</label>
            </div>
            {
                index === 0
                    ? <QuestionList title="New Questions" questions={unanswered} showQuestion={showQuestion} />
                    : <QuestionList title="Completed Questions" questions={answered} showQuestion={showQuestion} />
            }
        </div>);
};

export default Dashboard;