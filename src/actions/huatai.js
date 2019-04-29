import axios from 'axios'

export const ADD_BIRTHDAY = 'ADD_BIRTHDAY';

export function addBirthday(birthday) {
    return {type: ADD_BIRTHDAY, birthday}
}

export const ADD_INSURE = 'ADD_INSURE';

const addInsure = insure => ({
    type: ADD_INSURE, insure: insure
});

export const getInsure = () => (dispatch, getState) => {
    axios
        .get('/api/search?collection=insurance')
        .then(res => {
            dispatch(addInsure(res.data.cb))
        })
        .catch(e => {
            console.log(e)
        })
};