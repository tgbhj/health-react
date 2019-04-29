import {
    ADD_USER,
    ADD_QUESTIONS,
    ADD_POLICY,
    ADD_USERINFO,
    ADD_USERCHANNEL
} from '../actions/user'

const initialState = {
    token: localStorage.getItem('health-token'),
    user: {},
    questions: [],
    policy: [],
    user_info: [],
    userChannel: {}
};

export function userTodo(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {...state, user: action.user};
        case ADD_QUESTIONS:
            return {...state, questions: action.questions};
        case ADD_POLICY:
            return {...state, policy: action.policy};
        case ADD_USERINFO:
            return {...state, user_info: action.user_info};
        case ADD_USERCHANNEL:
            return {...state, userChannel: action.userChannel};
        default:
            return state
    }
}