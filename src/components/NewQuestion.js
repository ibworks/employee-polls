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

                <input data-testid="tb1" name="1" placeholder="Option 1" onChange={e => setOptionOne(e.target.value)} />
                <input data-testid="tb2" name="2" placeholder="Option 2" onChange={e => setOptionTwo(e.target.value)} />

                <input data-testid="btnSubmit" type="submit" value="Save Answer" disabled={!optionOne || !optionTwo || optionOne.length <1 || optionTwo.length<1} />
            </form>
        </div>
    );
};

export default NewQuestion;