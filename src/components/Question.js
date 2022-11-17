import { useState } from "react";
import UserLabel from "./UserLabel";

const Question = ({ createdByUser, question, onSubmit, savedAnswer }) => {

    const [answer, setAnswer] = useState(savedAnswer);
    const [submitted, setSubmitted] = useState(savedAnswer && savedAnswer.length > 0);

    if (!question) return null;

    const { optionOne, optionTwo } = question;
    const options = [{ id: 'optionOne', value: optionOne }, { id: 'optionTwo', value: optionTwo }];
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;

    const stats = (option) => ` (${option.votes.length} votes: ${(option.votes.length / totalVotes * 100).toFixed(0)}%)`;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(answer);
        setSubmitted(true);
    }

    return (
        <div className="question">
            <h1>Poll by</h1>
            <div className="question-author">
                <UserLabel className="question-user-label" user={createdByUser} />
            </div>
            <form className="question-form" onSubmit={handleSubmit} >
                <h1>Would you rather:</h1>
                <div className="question-answers">
                    {
                        options.map((o) => (
                            <div key={o.id}>
                                <input id={o.id} name="answer" type="radio" defaultChecked={savedAnswer === o.id} onClick={e => setAnswer(o.id)} />
                                <label htmlFor={o.id}>
                                    {`${o.value.text}${submitted ? stats(o.value): ''}`}
                                </label>
                            </div>
                        ))
                    }
                </div>

                {submitted
                    ? null
                    : (<input type="submit" value="Save Answer" disabled={!answer} />)}
                
            </form>
        </div>
    );
};

export default Question;