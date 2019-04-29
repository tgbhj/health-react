import {ADD_LINES} from '../actions/line'

const initialState = {
    lines: {}
};

export function lineTodo(state = initialState, action) {
    switch (action.type) {
        case ADD_LINES:
            return {...state, lines: action.lines};
        default:
            return state
    }
}