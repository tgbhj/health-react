import {
    ADD_USERS,
    ADD_INFO,
    ADD_CHANNELS,
    ADD_VIDEOS,
    ADD_SYS,
    ADD_DOCTORS,
    ADD_QUESTIONSTATE1,
    ADD_QUESTIONSTATE2,
    ADD_QUESTIONSTATE3,
    ADD_DOCUSERS
} from '../actions/admin'

const initialState = {
    users: [],
    docUsers: [],
    healthInfo: [],
    channels: [],
    videos: [],
    doctors: [],
    questionState1: [],
    questionState2: [],
    questionState3: [],
    sys: {}
};

export function adminTodo(state = initialState, action) {
    switch (action.type) {
        case ADD_USERS:
            return {...state, users: action.users};
        case ADD_DOCUSERS:
            return {...state, docUsers: action.docUsers};
        case ADD_INFO:
            return {...state, healthInfo: action.healthInfo};
        case ADD_CHANNELS:
            return {...state, channels: action.channels};
        case ADD_VIDEOS:
            return {...state, videos: action.videos};
        case ADD_DOCTORS:
            return {...state, doctors: action.doctors};
        case ADD_QUESTIONSTATE1:
            return {...state, questionState1: action.questionState1};
        case ADD_QUESTIONSTATE2:
            return {...state, questionState2: action.questionState2};
        case ADD_QUESTIONSTATE3:
            return {...state, questionState3: action.questionState3};
        case ADD_SYS:
            return {...state, sys: action.sys};
        default:
            return state
    }
}