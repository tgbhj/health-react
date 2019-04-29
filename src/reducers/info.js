import {ADD_INFORMATION, ADD_INFORMATIONS, ADD_MED} from '../actions/info'

const initialState = {
    informations: [],
    information: {},
    med: []
};

export const infoTodo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INFORMATIONS:
            return {...state, informations: action.informations};
        case ADD_INFORMATION:
            return {...state, information: action.information};
        case ADD_MED:
            return {...state, med: action.med};
        default:
            return state
    }
};