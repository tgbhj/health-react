import axios from 'axios'

export const ADD_VIDEOS = 'ADD_VIDEOS';

const addVideos = videos => ({
    type: ADD_VIDEOS, videos: videos
});

export const getVideos = () => (dispatch, getState) => {
    axios
        .get('/api/search?collection=videos&limit=4')
        .then(res => {
            dispatch(addVideos(res.data.cb))
        })
        .catch(e => {
            console.log(e)
        })
};

export const ADD_CHANNELS = 'ADD_CHANNELS';

const addChannels = channels => ({
    type: ADD_CHANNELS, channels: channels
});

export const getChannels = () => (dispatch, getState) => {
    axios
        .get('/api/search?collection=channels&state=1&limit=4')
        .then(res => {
            dispatch(addChannels(res.data.cb))
        })
        .catch(e => {
            console.log(e)
        })
};

export const ADD_INFO = 'ADD_INFO';

const addInfo = info => ({
    type: ADD_INFO, info: info
});

export const getInfo = () => (dispatch, getState) => {
    axios
        .get('/api/search?collection=info&limit=3')
        .then(res => {
            dispatch(addInfo(res.data.cb))
        })
        .catch(e => {
            console.log(e)
        })
};

export const ADD_DOCTORS = 'ADD_DOCTORS';

const addDoctors = doctors => ({
    type: ADD_DOCTORS, doctors: doctors
});

export const getDoctors = () => (dispatch, getState) => {
    axios
        .get('/api/search?collection=doctors&limit=4')
        .then(res => {
            dispatch(addDoctors(res.data.cb))
        })
        .catch(e => {
            console.log(e)
        })
};

export const ADD_MED = 'ADD_MED';

const addMed = med => ({
    type: ADD_MED, med: med
});

export const getMed = () => (dispatch, getState) => {
    axios
        .get('/api/search?collection=medicine&limit=4')
        .then(res => {
            dispatch(addMed(res.data.cb))
        })
        .catch(e => {
            console.log(e)
        })
};