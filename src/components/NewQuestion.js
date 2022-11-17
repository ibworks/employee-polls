import { useState } from "react";

const NewQuestion = ({ onSubmit }) => {
    const [optionOne, setOptionOne] = useState();
    const [optionTwo, setOptionTwo] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit([optionOne, optionTwo]);
    }

    return (
        <div className="question">
            <form data-testid="form" className="question-form" onSubmit={handleSubmit} >
                <h1>Would You Rather</h1>
                <h4>Create Your Own Poll</h4>
                <div>
                    <input className="question-textBox" data-testid="tb1" name="1" placeholder="Option 1" onChange={e => setOptionOne(e.target.value)} />
                    or
                    <input className="question-textBox" data-testid="tb2" name="2" placeholder="Option 2" onChange={e => setOptionTwo(e.target.value)} />
                </div>
                <input className="question-button" data-testid="btnSubmit" type="submit" value="Save" disabled={!optionOne || !optionTwo || optionOne.length <1 || optionTwo.length<1} />
            </form>
        </div>
    );
};

export default NewQuestion;