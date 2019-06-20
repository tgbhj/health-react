import {
    CHANNELS_LOADING,
    VIDEOS_LOADING,
    CHANNEL_PLAYER,
    VIDEO_PLAYER,
    VIDEOS_INDEX,
    CHANNELS_INDEX
} from '../actions/vod_live_ui'

const initialState = {
    channels_loading: true,
    channel_player: null,
    videos_loading: true,
    video_player: null,
    channels_index: [],
    videos_index: []
};

export function vodliveUi(state = initialState, action) {
    switch (action.type) {
        case CHANNELS_LOADING:
            return {...state, channels_loading: action.channels_loading};
        case CHANNEL_PLAYER:
            return {...state, channel_player: action.channel_player};
        case VIDEOS_LOADING:
            return {...state, videos_loading: action.videos_loading};
        case VIDEO_PLAYER:
            return {...state, video_player: action.video_player};
        case CHANNELS_INDEX:
            return {...state, channels_index: action.channels_index};
        case VIDEOS_INDEX:
            return {...state, videos_index: action.videos_index};
        default:
            return state
    }
}