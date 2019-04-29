import {ADD_CHANNEL, ADD_VIDEO, ADD_CHANNELS, ADD_VIDEOS} from '../actions/vod_live'

const initialState = {
    channels: [],
    channel: {},
    videos: [],
    video: {}
};

export function vodliveTodo(state = initialState, action) {
    switch (action.type) {
        case ADD_CHANNEL:
            return {...state, channel: action.channel};
        case ADD_VIDEO:
            return {...state, video: action.video};
        case ADD_VIDEOS:
            return {...state, videos: action.videos};
        case ADD_CHANNELS:
            return {...state, channels: action.channels};
        default:
            return state
    }
}