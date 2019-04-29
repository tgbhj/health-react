export const QUESTION_LOADING = 'QUESTION_LOADING';

export function questionLoading(loading) {
    return {type: QUESTION_LOADING, loading}
}

export const QUESTIONLIST_DISABLED = 'QUESTIONLIST_DISABLED';

export function questionlistDisabled(disabled) {
    return {type: QUESTIONLIST_DISABLED, disabled}
}

export const QUEST_PAYTYPE = 'QUEST_PAYTYPE';

export function questPayType(quest_payType) {
    return {type: QUEST_PAYTYPE, quest_payType}
}

export const QUEST_DIALOG = 'QUEST_DIALOG';

export function questDialog(quest_dialog) {
    return {type: QUEST_DIALOG, quest_dialog}
}

export const CONSULT_DIALOG = 'CONSULT_DIALOG';

export function consultDialog(consult_dialog) {
    return {type: CONSULT_DIALOG, consult_dialog}
}

export const CONSULT_PAYTYPE = 'CONSULT_PAYTYPE';

export function consultPayType(consult_payType) {
    return {type: CONSULT_PAYTYPE, consult_payType}
}