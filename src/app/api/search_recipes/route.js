const URL_API = process.env.API_BASE_URL
import getParams from '../_controllers/get_params.js'
import { requestGet } from '../requestAPI.js'

export async function GET(request) {
    const ingredients = getParams(request, 'ingredients')
    const offSet = getParams(request, 'offSet')

    let options = ''
    const diet = getParams(request, 'diet')
    const intolerances = getParams(request, 'intolerances')
    const cuisine = getParams(request, 'cuisine')
    if (diet)
        options += `&diet=${diet}`
    if (intolerances)
        options += `&intolerances=${intolerances}`
    if (cuisine)
        options += `&cuisine=${cuisine}`

    try {
        const response = await fetch(URL_API + `/recipes/complexSearch?includeIngredients=${ingredients}&offset=${offSet}` + options, requestGet)
        const data = await response.json()

        return Response.json(data)
    }
    catch (error) {
        return Response.json(error)
    }
}
