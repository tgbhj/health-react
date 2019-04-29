import {
    USER_CURRENT,
    USER_DIALOG,
    WX_QRCODE,
    QRCODE_DIALOG,
    DISABLED
} from '../actions/user_ui'

const initialState = {
    current: 0,
    dialogVisible: false,
    qrcode: '',
    dialog: false,
    disabled: true
};

export function userUi(state = initialState, action) {
    switch (action.type) {
        case USER_CURRENT:
            return {...state, current: action.current};
        case USER_DIALOG:
            return {...state, dialogVisible: action.dialogVisible};
        case WX_QRCODE:
            return {...state, qrcode: action.qrcode};
        case QRCODE_DIALOG:
            return {...state, dialog: action.dialog};
        case DISABLED:
            return {...state, disabled: action.disabled};
        default:
            return state
    }
}