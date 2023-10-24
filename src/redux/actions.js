export const GET_RESULT_INGREDIENTS = 'GET_RESULT_INGREDIENTS'
export const GET_RESULT_INFORMATION = 'GET_RESULT_INFORMATION'

export const searchRecepiesByIngredient = (ingredient) => {
    return function (dispatch) {
        return fetch(process.env.NEXT_PUBLIC_API_BASE_URL + `/recepies/search/${ingredient}`)
            .then(response => response.json())
            .then((response) => {
                dispatch({ type: GET_RESULT_INGREDIENTS, payload: response })
            })
            .catch(() => dispatch({ type: GET_RESULT_INGREDIENTS, payload: false }));
    }
}

export const searchRecepiesInformation = (id) => {
    return function (dispatch) {
        return fetch(process.env.NEXT_PUBLIC_API_BASE_URL + `/recepies/information/${id}`)
            .then(response => response.json())
            .then((response) => {
                dispatch({ type: GET_RESULT_INFORMATION, payload: response })
            })
            .catch(() => dispatch({ type: GET_RESULT_INFORMATION, payload: false }));
    }
}