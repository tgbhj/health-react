import {ADD_DOCTORS, ADD_DOCTOR} from '../actions/doctor'

const initialState = {
    doctors: [],
    doctor: {}
};

export function doctorTodo(state = initialState, action) {
    switch (action.type) {
        case ADD_DOCTORS:
            return {...state, doctors: action.doctors};
        case ADD_DOCTOR:
            return {...state, doctor: action.doctor};
        default:
            return state
    }
}