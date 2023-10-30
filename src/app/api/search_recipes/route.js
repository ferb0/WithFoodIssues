const URL_API = process.env.API_BASE_URL
import getParams from '../controllers/get_params.js'
import { requestGet } from '../requestAPI.js'

export async function GET(request) {
    const ingredients = getParams(request, 'ingredients')
    const offSet = getParams(request, 'offSet')

    try {
        const response = await fetch(URL_API + `/recipes/complexSearch?includeIngredients=${ingredients}&offset=${offSet}`, requestGet)
        const data = await response.json()

        return Response.json(data)
    }
    catch (error) {
        return Response.json(error)
    }
}
