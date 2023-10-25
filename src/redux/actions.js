export const GET_RESULT_INGREDIENTS = 'GET_RESULT_INGREDIENTS'
export const GET_RESULT_INFORMATION = 'GET_RESULT_INFORMATION'
export const CLEAN_RESULT_INFORMATION = 'CLEAN_RESULT_INFORMATION'

export const searchRecepiesByIngredient = (ingredient) => {
    // return function (dispatch) {
    //     return fetch(URL + `/recipes/complexSearch?includeIngredients=${ingredient}`, requestGet)
    //         .then(response => {
    //             if (!response.ok) throw Error(response.status)
    //             return response.json()
    //         })
    //         .then((response) => {
    //             dispatch({ type: GET_RESULT_INGREDIENTS, payload: response })
    //         })
    //         .catch(() => dispatch({ type: GET_RESULT_INGREDIENTS, payload: false }));
    // }
    return function (dispatch) {
        return fetch(`/api/recipes?Ingredients=${ingredient}`)
            .then(response => {
                if (!response.ok) throw Error(response.status)
                return response.json()
            })
            .then((response) => {
                dispatch({ type: GET_RESULT_INGREDIENTS, payload: response })
            })
            .catch(() => dispatch({ type: GET_RESULT_INGREDIENTS, payload: false }));
    }
}

export const searchRecepiesInformation = (id) => {
    return function (dispatch) {
        return fetch(URL + `/recipes/${id}/information`, requestGet)
            .then(response => {
                if (!response.ok) throw Error(response.status)
                return response.json()
            })
            .then((response) => {
                dispatch({ type: GET_RESULT_INFORMATION, payload: response })
            })
            .catch(() => dispatch({ type: GET_RESULT_INFORMATION, payload: false }));
    }
}

export const cleanRecepiesInformation = () => {
    return { type: CLEAN_RESULT_INFORMATION }
}
