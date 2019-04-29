import {
    CONSULT_PAYTYPE,
    CONSULT_DIALOG,
    QUEST_DIALOG,
    QUEST_PAYTYPE,
    QUESTIONLIST_DISABLED,
    QUESTION_LOADING
} from '../actions/question_ui'

const initialState = {
    consult_payType: 0,
    consult_dialog: false,
    quest_dialog: false,
    quest_payType: 0,
    disabled: true,
    loading: true,
    view: false
};

export function questionUi(state = initialState, action) {
    switch (action.type) {
        case CONSULT_PAYTYPE:
            return {...state, consult_payType: action.consult_payType};
        case CONSULT_DIALOG:
            return {...state, consult_dialog: action.consult_dialog};
        case QUEST_DIALOG:
            return {...state, quest_dialog: action.quest_dialog};
        case QUEST_PAYTYPE:
            return {...state, quest_payType: action.quest_payType};
        case QUESTIONLIST_DISABLED:
            return {...state, disabled: action.disabled};
        case QUESTION_LOADING:
            return {...state, loading: action.loading};
        default:
            return state
    }
}