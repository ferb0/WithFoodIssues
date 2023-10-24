import { GET_RESULT_INFORMATION, GET_RESULT_INGREDIENTS } from '../redux/actions.js'

const defaultState = {
    recepieInfo: {},
    results: {
        results: [],
        offset: 0,
        number: 0,
        totalResults: 0,
    }
};

const defaultReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_RESULT_INGREDIENTS:
            return {
                ...state,
                results: action.payload
            }
        case GET_RESULT_INFORMATION:
            return {
                ...state,
                recepiInfo: action.payload
            }
        default:
            return state
    }
}

export default defaultReducer