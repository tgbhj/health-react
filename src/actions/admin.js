export const ADD_USERS = 'ADD_USERS';

export const addUsers = users => ({
    type: ADD_USERS, users: users
});

export const ADD_DOCUSERS = 'ADD_DOCUSERS';

export const addDocUsers = docUsers => ({
    type: ADD_DOCUSERS, docUsers: docUsers
});

export const ADD_VIDEOS = 'ADD_VIDEOS';

export const addVideos = videos => ({
    type: ADD_VIDEOS, videos: videos
});

export const ADD_CHANNELS = 'ADD_CHANNELS';

export const addChannels = channels => ({
    type: ADD_CHANNELS, channels: channels
});

export const ADD_INFO = 'ADD_INFO';

export const addInfo = healthInfo => ({
    type: ADD_INFO, healthInfo: healthInfo
});

export const ADD_SYS = 'ADD_SYS';

export const addSYS = sys => ({
    type: ADD_SYS, sys: sys
});

export const ADD_DOCTORS = 'ADD_DOCTORS';

export const addDoctors = doctors => ({
    type: ADD_DOCTORS, doctors: doctors
});

export const ADD_QUESTIONSTATE1 = 'ADD_QUESTIONSTATE1';

export const addQuestionState1 = questionState1 => ({
    type: ADD_QUESTIONSTATE1, questionState1: questionState1
});

export const ADD_QUESTIONSTATE2 = 'ADD_QUESTIONSTATE2';

export const addQuestionState2 = questionState2 => ({
    type: ADD_QUESTIONSTATE2, questionState2: questionState2
});

export const ADD_QUESTIONSTATE3 = 'ADD_QUESTIONSTATE3';

export const addQuestionState3 = questionState3 => ({
    type: ADD_QUESTIONSTATE3, questionState3: questionState3
});