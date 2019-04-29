export const CHANNEL_PLAYER = 'CHANNEL_PLAYER';

export function channelPlayer(channel_player) {
    return {type: CHANNEL_PLAYER, channel_player}
}

export const VIDEO_PLAYER = 'VIDEO_PLAYER';

export function videoPlayer(video_player) {
    return {type: VIDEO_PLAYER, video_player}
}

export const CHANNELS_LOADING = 'CHANNELS_LOADING';

export function channelsLoading(channels_loading) {
    return {type: CHANNELS_LOADING, channels_loading}
}

export const VIDEOS_LOADING = 'VIDEOS_LOADING';

export function videosLoading(videos_loading) {
    return {type: VIDEOS_LOADING, videos_loading}
}

export const CHANNELS_INDEX = 'CHANNELS_INDEX';

export const channelsIndex = channels_idnex => ({
    type: CHANNELS_INDEX, channels_idnex: channels_idnex
});

export const VIDEOS_INDEX = 'VIDEOS_INDEX';

export const videosIndex = videos_index => ({
    type: VIDEOS_INDEX, videos_index: videos_index
});