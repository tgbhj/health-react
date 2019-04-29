import axios from 'axios'
import {medIndex, infoIndex} from './info_ui'

export const ADD_INFORMATIONS = 'ADD_INFORMATIONS';

const addInformations = informations => ({
    type: ADD_INFORMATIONS, informations: informations
});

export const getInformations = page => (dispatch, getState) => {
    axios
        .get('/api/infos')
        .then(res => {
            dispatch(addInformations(res.data.cb));
            dispatch(infoIndex(res.data.cb.slice((page - 1) * 20, page * 20)))
        })
        .catch(e => {
            console.log(e)
        })
};

export const ADD_INFORMATION = 'ADD_INFORMATION';

export const addInformation = information => ({
    type: ADD_INFORMATION, information: information
});

export const ADD_MED = 'ADD_MED';

const addMed = med => ({
    type: ADD_MED, med: med
});

export const getMed = page => (dispatch, getState) => {
    axios
        .get('/api/getMed')
        .then(res => {
            dispatch(addMed(res.data.cb));
            dispatch(medIndex(res.data.cb.slice((page - 1) * 20, page * 20)))
        })
        .catch(e => {
            console.log(e)
        })
};