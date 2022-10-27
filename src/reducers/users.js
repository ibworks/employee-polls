import {types as UserActionTypes } from "../actions/users";

const initialState = {
  authedUser: null,
  all:[],
}
  
const users = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.send:
      const { all } = action;
      return { ...state, all }
    case UserActionTypes.logInAs:
      const { id } = action;
      const authedUser = getUser(state.all, id);
      return { ...state, authedUser };
    case UserActionTypes.logOut:
      return { ...state, authedUser: null };
    default:
      return state;
  }
}
  
const getUser = (all, id) => {
  const filtered = all.filter(x => x.id === id);
  return filtered.length === 0 ? null : filtered[0];
}

export default users;