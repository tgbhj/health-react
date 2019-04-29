import {ADD_BIRTHDAY, ADD_INSURE} from '../actions/huatai'

const initialState = {
    birthday: '',
    insure: []
};

export function huataiTodo(state = initialState, action) {
    switch (action.type) {
        case ADD_BIRTHDAY:
            return {...state, birthday: action.birthday};
        case ADD_INSURE:
            return {...state, insure: action.insure};
        default:
            return state
    }
}