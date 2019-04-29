import {INDEX_VIDEOS, INDEX_CHANNELS, INDEX_MED, INDEX_INFO, INDEX_DOC} from '../actions/page_ui'

const initialState = {
    videos_loading: true,
    channels_loading: true,
    med_loading: true,
    info_loading: true,
    doc_loading: true
};

export function pageUi(state = initialState, action) {
    switch (action.type) {
        case INDEX_VIDEOS:
            return {...state, videos_loading: action.videos_loading};
        case INDEX_CHANNELS:
            return {...state, channels_loading: action.channels_loading};
        case INDEX_MED:
            return {...state, med_loading: action.med_loading};
        case INDEX_INFO:
            return {...state, info_loading: action.info_loading};
        case INDEX_DOC:
            return {...state, doc_loading: action.doc_loading};
        default:
            return state
    }
}