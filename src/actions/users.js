import { _getUsers } from "../_DATA"
export const types = {
    send: 'USERS_SEND',
    logInAs: 'USERS_LOG_IN_AS',
    logOut: 'USERS_LOG_OUT',
}

export const getAll = () => async (dispatch, getState) => {
    const allUsers = Object.values(await _getUsers());
    const action = { allUsers, type: types.send };
    dispatch(action);
}

export const logInAs = (id) => (dispatch) => {
    const action = { id, type: types.logInAs };
    dispatch(action);
}

export const logOut = () => ({ type: types.logOut });
