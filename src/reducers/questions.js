import {types as QuestionActionTypes } from "../actions/questions";

const initialState = {
  all: [],
}

const { send, add, answer } = QuestionActionTypes;

const questions = (state = initialState, action) => {
  switch (action.type) {
    case send:
      const { all } = action;
      return { ...state, all }
    case add:
      const { question } = action;
      return { ...state, all: state.all.concat(question) };
    case answer:
      const { questionId, userId, option } = action;
      const questions = state.all;

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
      
      return { ...state, all: questions };
    default:
      return state;
  }
}

export default questions;