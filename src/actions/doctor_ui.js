export const DOCTORS_LOADING = 'DOCTORS_LOADING';

export function doctorsLoading(doctors_loading) {
    return {type: DOCTORS_LOADING, doctors_loading}
}

export const DOCTOR_LOADING = 'DOCTOR_LOADING';

export function doctorLoading(doctor_loading) {
    return {type: DOCTOR_LOADING, doctor_loading}
}

export const DOCTOR_DIALOG = 'DOCTOR_DIALOG';

export function doctorDialog(dialogVisible) {
    return {type: DOCTOR_DIALOG, dialogVisible}
}

export const DOCTORS_INDEX = 'DOCTORS_INDEX';

export const doctorsIndex = doctors_index => ({
    type: DOCTORS_INDEX, doctors_index: doctors_index
});