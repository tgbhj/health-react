import {ADD_DOCTORS, ADD_CHANNELS, ADD_INFO, ADD_VIDEOS, ADD_MED} from '../actions/page'

const initialState = {
    channels: [],
    videos: [],
    doctors: [],
    info: [],
    med: []
};

export function pageTodo(state = initialState, action) {
    switch (action.type) {
        case ADD_DOCTORS:
            return {...state, doctors: action.doctors};
        case ADD_CHANNELS:
            return {...state, channels: action.channels};
        case ADD_VIDEOS:
            return {...state, videos: action.videos};
        case ADD_INFO:
            return {...state, info: action.info};
        case ADD_MED:
            return {...state, med: action.med};
        default:
            return state
    }
}