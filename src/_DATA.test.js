import { _saveQuestion, _saveQuestionAnswer } from './_DATA';

describe('_saveQuestion', () => {

    it('returns saved question', async () => {
        const question = {
            optionOneText: '1',
            optionTwoText: '2',
            author: 'author'
        };
        const result = await _saveQuestion(question);
        
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('timestamp');
        expect(result).toHaveProperty('author', question.author);
        expect(result).toHaveProperty('optionOne.text', question.optionOneText);
        expect(result).toHaveProperty('optionTwo.text', question.optionTwoText);
    });

    it('will throw with invalid input', async () => {
        await expect(_saveQuestion('invalid'))
            .rejects
            .toBe("Please provide optionOneText, optionTwoText, and author");
    });
});

describe('_saveQuestionAnswer', () => {
    it('returns true', async () => {
        await expect(_saveQuestionAnswer({
            authedUser: 'sarahedo', qid: 'xj352vofupe1dqz9emx13r', answer: 'optionOne'
        }))
            .resolves
            .toBe(true);
    });

    it('will throw with invalid input', async () => {
        await expect(_saveQuestionAnswer('invalid'))
            .rejects
            .toBe("Please provide authedUser, qid, and answer");
    });
    
});
