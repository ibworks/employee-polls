import { _getQuestions } from "../_DATA"
export const types = {
    send: 'QUESTIONS_SEND',
    add: 'QUESTIONS_ADD',
    answer: 'QUESTIONS_ANSWER',
}

export const getAll = () => async (dispatch) => {
    const all = Object.values(await _getQuestions());
    const action = { all, type: types.send };
    dispatch(action);
}

export const add = (newQuestion) => (dispatch) => {
    const action = { newQuestion, type: types.add };
    dispatch(action);
}

export const answer = (questionId, userId, option) => (dispatch) => {
    const action = { questionId, userId, option, type: types.answer };
    dispatch(action);
}

export const logOut = () => ({ type: types.logOut });

const _default = { getAll, add, answer };

export default _default;
