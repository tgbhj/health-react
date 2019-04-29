import axios from 'axios'
import {doctorsIndex} from './doctor_ui'

export const ADD_DOCTORS = 'ADD_DOCTORS';

const addDoctors = doctors => ({
    type: ADD_DOCTORS, doctors: doctors
});

export const getDoctors = page => (dispatch, getState) => {
    axios
        .get('/api/doctors')
        .then(res => {
            dispatch(addDoctors(res.data.cb));
            dispatch(doctorsIndex(res.data.cb.slice((page - 1) * 20, page * 20)))
        })
        .catch(e => {
            console.log(e)
        })
};

export const ADD_DOCTOR = 'ADD_DOCTOR';

const addDoctor = doctor => ({
    type: ADD_DOCTOR, doctor: doctor
});

export const getDoctor = id => (dispatch, getState) => {
    axios
        .get('/api/doctor', {headers: {'id': id}})
        .then(res => {
            dispatch(addDoctor(res.data.cb));
        })
        .catch(e => {
            console.log(e)
        })
};