export const INDEX_DOC = 'INDEX_DOC';

export function indexDOC(doc_loading) {
    return {type: INDEX_DOC, doc_loading}
}

export const INDEX_INFO = 'INDEX_INFO';

export function indexInfo(info_loading) {
    return {type: INDEX_INFO, info_loading}
}

export const INDEX_MED = 'INDEX_MED';

export function indexMed(med_loading) {
    return {type: INDEX_MED, med_loading}
}

export const INDEX_CHANNELS = 'INDEX_CHANNELS';

export function indexChannels(channels_loading) {
    return {type: INDEX_CHANNELS, channels_loading}
}

export const INDEX_VIDEOS = 'INDEX_VIDEOS';

export function indexVideos(videos_loading) {
    return {type: INDEX_VIDEOS, videos_loading}
}