import { useState } from "react";
import UserLabel from "./UserLabel";

const Question = ({ createdByUser, question, onSubmit, answer }) => {

    const [selectedOption, setSelectedOption] = useState(answer);

    if (!question) return null;
    
    const { optionOne, optionTwo } = question;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;

    const stats = (option) => ` (${option.votes.length} votes: ${(option.votes.length / totalVotes * 100).toFixed(0)}%)`;
    const optionLabel = (option) => `${option.text}${answer > 0 ? stats(option): ''}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(selectedOption);
    }

    return (
        <div className="question">
            <h1>Poll by</h1>
            <UserLabel className="question-user-label" user={createdByUser} />
            <form className="question-form" onSubmit={handleSubmit} >
                <h1>Would you rather:</h1>
                <div>
                    <input name="answer" type="radio" checked={selectedOption === 1} onClick={e => setSelectedOption(1)} />
                    <label htmlFor="option-one">{optionLabel(optionOne)}</label>
                </div>
                <div>
                    <input name="answer" type="radio" checked={selectedOption === 2} onClick={e => setSelectedOption(2)} />
                    <label htmlFor="option-one">{optionLabel(optionTwo)}</label>
                </div>

                <input type="submit" value="Submit" disabled={answer > 0 || selectedOption < 1} />
            </form>
        </div>
    );
};

export default Question;