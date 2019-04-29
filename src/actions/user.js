import axios from "axios"
import {notification} from "antd"

export const ADD_USER = 'ADD_USER';

export const addUser = user => ({
    type: ADD_USER, user: user
});

export const getUser = token => (dispatch, getState) => {
    axios
        .get('/api/user', {headers: {'token': token}})
        .then(res => {
            if (res.data.code === 20000) {
                dispatch(addUser(res.data.cb))
            } else {
                notification.error({
                    message: 'Token过期',
                    description: '',
                    duration: 2
                });
                localStorage.removeItem('health-token');
                window.location.reload()
            }
        })
        .catch(e => {
            console.log(e)
        })
};

export const ADD_QUESTIONS = 'ADD_QUESTIONS';

const addQuestions = questions => ({
    type: ADD_QUESTIONS, questions: questions
});

export const getQuestions = token => (dispatch, getState) => {
    axios
        .get('/api/question-history', {headers: {'token': token}})
        .then(res => {
            if (res.data.code === 20000) {
                dispatch(addQuestions(res.data.cb))
            } else if (res.data.code === 50000) {
                notification.error({
                    message: 'UnKnow-Error',
                    description: '',
                    duration: 2
                });
            } else if (res.data.code === 50009) {
                notification.error({
                    message: '医生不存在',
                    description: '',
                    duration: 2
                });
            } else {
                notification.error({
                    message: 'Token过期',
                    description: '',
                    duration: 2
                });
                localStorage.removeItem('health-token');
                window.location.reload()
            }
        })
        .catch(e => {
            console.log(e)
        })
};

export const ADD_POLICY = 'ADD_POLICY';

const addPolicy = policy => ({
    type: ADD_POLICY, policy: policy
});

export const getPolicy = token => (dispatch, getState) => {
    axios
        .get('/api/policy', {headers: {'token': token}})
        .then(res => {
            if (res.data.code === 20000) {
                dispatch(addPolicy(res.data.cb))
            } else if (res.data.code === 50000) {
                notification.error({
                    message: 'UnKnow-Error',
                    description: '',
                    duration: 2
                });
            } else {
                notification.error({
                    message: 'Token过期',
                    description: '',
                    duration: 2
                });
                localStorage.removeItem('health-token');
                window.location.reload()
            }
        })
        .catch(e => {
            console.log(e)
        })
};

export const ADD_USERINFO = 'ADD_USERINFO';

const addUserInfo = user_info => ({
    type: ADD_USERINFO, user_info: user_info
});

export const getUserInfo = token => (dispatch, getState) => {
    axios
        .get('/api/userCollect', {headers: {'token': token}})
        .then(res => {
            dispatch(addUserInfo(res.data.cb))
        })
        .catch(e => {
            console.log(e)
        })
};

export const ADD_USERCHANNEL = 'ADD_USERCHANNEL';

const addUserChannel = userChannel => ({
    type: ADD_USERCHANNEL, userChannel: userChannel
});

export const getUserChannel = token => (dispatch, getState) => {
    axios
        .get('/api/userChannel', {headers: {'token': token}})
        .then(res => {
            if (res.data.code === 20001) {
                dispatch(addUserChannel(res.data.cb))
            } else {
                dispatch(addUserChannel(res.data.cb))
            }
        })
        .catch(e => {
            console.log(e)
        })
};