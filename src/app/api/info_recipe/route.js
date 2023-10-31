const URL_API = process.env.API_BASE_URL
import getParams from '../_controllers/get_params.js'
import { requestGet } from '../requestAPI.js'

export async function GET(request) {
    const id = getParams(request, 'id')

    try {
        const response = await fetch(URL_API + `/recipes/${id}/information`, requestGet)
        const data = await response.json()

        return Response.json({ data })
    }
    catch (error) {
        return Response.json(error)
    }
}
