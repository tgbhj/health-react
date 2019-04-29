import {INFO_LOADING, INFOS_LOADING, MED_LOADING, INFO_INDEX, MED_INDEX} from '../actions/info_ui'

const initialState = {
    info_loading: true,
    infos_loading: true,
    med_loading: true,
    info_index: [],
    med_index: []
};

export function infoUi(state = initialState, action) {
    switch (action.type) {
        case INFO_LOADING:
            return {...state, info_loading: action.info_loading};
        case INFOS_LOADING:
            return {...state, infos_loading: action.infos_loading};
        case MED_LOADING:
            return {...state, med_loading: action.med_loading};
        case INFO_INDEX:
            return {...state, info_index: action.info_index};
        case MED_INDEX:
            return {...state, med_index: action.med_index};
        default:
            return state
    }
}