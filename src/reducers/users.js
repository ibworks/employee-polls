import {types as UserActionTypes } from "../actions/users";

const initialState = {
  loggedInUser: null,
  allUsers:[],
}
  
const users = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.send:
      const { allUsers } = action;
      return { ...state, allUsers }
    case UserActionTypes.logInAs:
      const { id } = action;
      const loggedInUser = getUser(state.allUsers, id);
      return { ...state, loggedInUser };
    case UserActionTypes.logOut:
      return { ...state, loggedInUser: null };
    default:
      return state;
  }
}
  
const getUser = (allUsers, id) => {
  const filtered = allUsers.filter(x => x.id === id);
  return filtered.length === 0 ? null : filtered[0];
}

export default users;