import { useState } from "react";
import UserLabel from "./UserLabel";

const Question = ({ createdByUser, question, onSubmit, savedAnswer }) => {

    const [answer, setAnswer] = useState(savedAnswer);

    if (!question) return null;

    const { optionOne, optionTwo } = question;
    const options = [{ id: 'optionOne', value: optionOne }, { id: 'optionTwo', value: optionTwo }];
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;

    const stats = (option) => ` (${option.votes.length} votes: ${(option.votes.length / totalVotes * 100).toFixed(0)}%)`;
    const label = (option) => `${option.text}${savedAnswer > 0 ? stats(option): ''}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(answer);
    }

    return (
        <div className="question">
            <h1>Poll by</h1>
            <UserLabel className="question-user-label" user={createdByUser} />
            <form className="question-form" onSubmit={handleSubmit} >
                <h1>Would you rather:</h1>
                {
                    options.map((o) => (
                        <div key={o.id}>
                            <input name="answer" type="radio" defaultChecked={savedAnswer === o.id} onClick={e => setAnswer(o.id)} />
                            <label htmlFor={o.id}>{label(o.value)}</label>
                        </div>
                    ))
                }

                <input type="submit" value="Save Answer" disabled={!!savedAnswer || !answer} />
            </form>
        </div>
    );
};

export default Question;