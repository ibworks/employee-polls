import {types as UserActionTypes } from "../actions/users";
import {types as QuestionActionTypes } from "../actions/questions";
const initialState = {
  authedUser: null,
  all:[],
}
  
const users = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.send:
      {
        const { all } = action;
        return { ...state, all }
      }
    case UserActionTypes.logInAs:
      {
        const { id } = action;
        const authedUser = getUser(state.all, id);
        return { ...state, authedUser };
      }
    case UserActionTypes.logOut:
      {
        return { ...state, authedUser: null };
      }
    case QuestionActionTypes.answer:
      {
        const { answer, questionId, userId } = action;
        const all = state.all.map(user => {
          if (user.id === userId) {
            
            user.answers.push({ questionId, answer });
          }
          return user;
        });

        return { ...state, all };
      }
    case QuestionActionTypes.add:
      {
        const { question:{id, author:userId} } = action;
        const all = state.all.map(user => {
          if (user.id === userId) {            
            user.questions.push(id);
          }
          return user;
        });
        
        return { ...state, all };
      }
    default:
      return state;
  }
}
  
const getUser = (all, id) => {
  const filtered = all.filter(x => x.id === id);
  return filtered.length === 0 ? null : filtered[0];
}

export default users;