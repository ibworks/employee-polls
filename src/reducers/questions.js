import {types as QuestionActionTypes } from "../actions/questions";

const initialState = {
  allQuestions: [],
}

const { send, add, answer } = QuestionActionTypes;

const users = (state = initialState, action) => {
  switch (action.type) {
    case send:
      const { allQuestions } = action;
      return { ...state, allQuestions }
    case add:
      const { newQuestion } = action;
      return { ...state, allQuestions: state.allQuestions.join(newQuestion) };
    case answer:
      const { questionId, userId, option } = action;
      const questions = state.allQuestions;

      questions.forEach(q => {
        if (q.id === questionId) {
          switch (Number(option)) {
            case 1:
              q.optionOne.votes.push(userId);
              break;
            default:
              q.optionTwo.votes.push(userId);
          }
        }
      });
      
      return { ...state, allQuestions: questions };
    default:
      return state;
  }
}

export default users;