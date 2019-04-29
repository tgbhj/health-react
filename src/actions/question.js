import axios from 'axios'

export const ADD_QUESTION = 'ADD_QUESTION';

const addQuestion = question => ({
    type: ADD_QUESTION, question: question
});

export const getQuestion = id => (dispatch, getState) => {
    axios
        .get('/api/question', {headers: {'id': id}})
        .then(res => {
            dispatch(addQuestion(res.data.cb))
        })
        .catch(e => {
            console.log(e)
        })
};

export const QUEST_QRCODE = 'QUEST_QRCODE';

export function questQrcode(quest_qrcode) {
    return {type: QUEST_QRCODE, quest_qrcode}
}

export const CONSULT_QRCODE = 'CONSULT_QRCODE';

export function consultQrcode(consult_qrcode) {
    return {type: CONSULT_QRCODE, consult_qrcode}
}

export const QUEST_DATA = 'QUEST_DATA';

const questData = data => ({
    type: QUEST_DATA, data: data
});

export const getQuestData = () => (dispatch, getState) => {
    axios
        .get('/api/questions')
        .then(res => {
            dispatch(questData(res.data.cb))
        })
        .catch(e => {
            console.log(e)
        })
};