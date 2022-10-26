const Question = ({ question }) => {
    if (!question) return null;
    
    const { optionOne, optionTwo, submit } = question;
    const handleSubmit = e => console.log(e);

    return (
        <form className="question" onSubmit={handleSubmit}>
            <p>Would you rather:</p>
            <input type="radio" id="option-1" name="question" value={1} />
            <label htmlFor="option-one">{optionOne.text}</label><br />
            <input type="radio" id="option-2" name="question" value={2} />
            <label htmlFor="option-one">{optionTwo.text}</label><br />
            <input type="submit" value="Submit" />
        </form>);
        
};

export default Question;