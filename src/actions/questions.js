import * as api from "../_DATA"
export const types = {
    send: 'QUESTIONS_SEND',
    add: 'QUESTIONS_SAVE',
    answer: 'QUESTIONS_SAVE_ANSWER',
}

export const getAll = () => async (dispatch) => {
    const all = Object.values(await api._getQuestions());
    const action = { all, type: types.send };

    dispatch(action);
}

export const save = (question) => async (dispatch) => {
    const result = await api._saveQuestion(question);
    const action = { question: result, type: types.add };
    
    dispatch(action);
}

export const answer = (qid, userId, answer) => async (dispatch, getState) => {
    const { users:{authedUser}} = getState();
    const action = { questionId:qid, userId, answer, type: types.answer };
    
    await api._saveQuestionAnswer({ authedUser, qid, answer });
    dispatch(action);
}

export const logOut = () => ({ type: types.logOut });

const _default = { getAll, save, answer };

export default _default;
