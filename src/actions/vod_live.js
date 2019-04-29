import axios from 'axios'
import {channelsIndex, videosIndex} from './vod_live_ui'

export const ADD_CHANNEL = 'ADD_CHANNEL';

export const addChannel = channel => ({
    type: ADD_CHANNEL, channel: channel
});

export const ADD_VIDEO = 'ADD_VIDEO';

export const addVideo = video => ({
    type: ADD_VIDEO, video: video
});

export const ADD_VIDEOS = 'ADD_VIDEOS';

const addVideos = videos => ({
    type: ADD_VIDEOS, videos: videos
});

export const getVideos = page => (dispatch, getState) => {
    axios
        .get('/api/videos')
        .then(res => {
            dispatch(addVideos(res.data.cb));
            dispatch(videosIndex(res.data.cb.slice((page - 1) * 20, page * 20)))
        })
        .catch(e => {
            console.log(e)
        })
};

export const ADD_CHANNELS = 'ADD_CHANNELS';

const addChannels = channels => ({
    type: ADD_CHANNELS, channels: channels
});

export const getChannels = page => (dispatch, getState) => {
    axios
        .get('/api/channels')
        .then(res => {
            dispatch(addChannels(res.data.cb));
            dispatch(channelsIndex(res.data.cb.slice((page - 1) * 20, page * 20)))
        })
        .catch(e => {
            console.log(e)
        })
};