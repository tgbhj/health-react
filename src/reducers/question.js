import {ADD_QUESTION, QUEST_QRCODE, CONSULT_QRCODE, QUEST_DATA} from '../actions/question'

const initialState = {
    question: {},
    quest_qrcode: '',
    consult_qrcode: '',
    data: []
};

export function questionTodo(state = initialState, action) {
    switch (action.type) {
        case ADD_QUESTION:
            return {...state, question: action.question};
        case QUEST_QRCODE:
            return {...state, quest_qrcode: action.quest_qrcode};
        case CONSULT_QRCODE:
            return {...state, consult_qrcode: action.consult_qrcode};
        case QUEST_DATA:
            return {...state, data: action.data};
        default:
            return state
    }
}