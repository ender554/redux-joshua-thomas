import {
    SEARCH_CHARACTERS_REQUEST,
    SEARCH_CHARACTERS_SUCCESS,
    SEARCH_CHARACTERS_ERROR
} from './actions';

const initialState = {
    characters: [],
    loading: false,
    error: null
};

export function characterReducer(state=initialState, action) {
    // Handle these sync actions
    console.log(action);
    if (action.type === SEARCH_CHARACTERS_REQUEST) {
        return({
            ...state,
            loading: true,
            error: null
        })
    }
    else if (action.type === SEARCH_CHARACTERS_SUCCESS) {
        return({
            ...state,
            loading: false,
            characters: action.characters,
            error: null
        })
    }
    else if (action.type === SEARCH_CHARACTERS_ERROR) {
        return({
            ...initialState,
            loading: false,
            error: action.error
        })
    }
    return state;
}
