import { _getUsers } from "../_DATA"
export const types = {
    send: 'USERS_SEND',
    logInAs: 'USERS_LOG_IN_AS',
    logOut: 'USERS_LOG_OUT',
}

export const getAll = () => async (dispatch) => {
    const all = Object.values(await _getUsers());

    all.forEach(u => {
        const entries = Object.entries(u.answers) || [];
        const answersArray = entries.map(e => ({ questionId: e[0], answer: e[1] }));
        u.answers = answersArray;
        u.questions = u.questions || [];
        u.rank = u.answers.length + (u.questions || []).length;
    });

    const action = { all, type: types.send };
    dispatch(action);
}

export const logInAs = (id) => (dispatch) => {
    const action = { id, type: types.logInAs };
    dispatch(action);
}

export const logOut = () => ({ type: types.logOut });

const _default = { getAll, logInAs, logOut };
export default _default;
