export const USER_CURRENT = 'USER_CURRENT';

export function userCurrent(current) {
    return {type: USER_CURRENT, current}
}

export const USER_DIALOG = 'USER_DIALOG';

export function userDialog(dialogVisible) {
    return {type: USER_DIALOG, dialogVisible}
}

export const WX_QRCODE = 'WX_QRCODE';

export function wxQrcode(qrcode) {
    return {type: WX_QRCODE, qrcode}
}

export const QRCODE_DIALOG = 'QRCODE_DIALOG';

export function qrcodeDialog(dialog) {
    return {type: QRCODE_DIALOG, dialog}
}

export const DISABLED = 'DISABLED';

export function disabled(disabled) {
    return {type: DISABLED, disabled}
}