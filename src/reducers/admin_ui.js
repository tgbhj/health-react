import {ADMIN_UI} from '../actions/admin_ui'

const initialState = {
    dialogVisible: false
};

export function adminUi(state = initialState, action) {
    switch (action.type) {
        case ADMIN_UI:
            return {...state, dialogVisible: action.dialogVisible};
        default:
            return state
    }
}