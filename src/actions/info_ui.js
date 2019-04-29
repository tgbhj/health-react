export const INFOS_LOADING = 'INFOS_LOADING';

export function infosLoading(infos_loading) {
    return {type: INFOS_LOADING, infos_loading}
}

export const INFO_LOADING = 'INFO_LOADING';

export function infoLoading(info_loading) {
    return {type: INFO_LOADING, info_loading}
}

export const MED_LOADING = 'MED_LOADING';

export function medLoading(med_loading) {
    return {type: MED_LOADING, med_loading}
}

export const INFO_INDEX = 'INFO_INDEX';

export const infoIndex = info_index => ({
    type: INFO_INDEX, info_index: info_index
});

export const MED_INDEX = 'MED_INDEX';

export const medIndex = med_index => ({
    type: MED_INDEX, med_index: med_index
});