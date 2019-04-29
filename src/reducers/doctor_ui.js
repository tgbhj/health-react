import {DOCTOR_DIALOG, DOCTOR_LOADING, DOCTORS_LOADING, DOCTORS_INDEX} from '../actions/doctor_ui'

const initialState = {
    dialogVisible: false,
    doctor_loading: true,
    doctors_loading: true,
    doctors_index: []
};

export function doctorUi(state = initialState, action) {
    switch (action.type) {
        case DOCTOR_DIALOG:
            return {...state, dialogVisible: action.dialogVisible};
        case DOCTOR_LOADING:
            return {...state, doctor_loading: action.doctor_loading};
        case DOCTORS_LOADING:
            return {...state, doctors_loading: action.doctors_loading};
        case DOCTORS_INDEX:
            return {...state, doctors_index: action.doctors_index};
        default:
            return state
    }
}