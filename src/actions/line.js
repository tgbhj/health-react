import axios from 'axios'

export const ADD_LINES = 'ADD_LINES';

const addLines = lines => ({type: ADD_LINES, lines: lines});

export const getLines = () => (dispatch, getState) => {
    axios
        .get('/api/lines')
        .then(res => {
            dispatch(addLines(res.data.cb))
        })
        .catch(e => {
            console.log(e)
        })
};