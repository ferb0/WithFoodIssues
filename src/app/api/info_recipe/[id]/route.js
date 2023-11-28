const URL_API = process.env.API_BASE_URL
import { requestGet } from '../../requestAPI.js'

export async function GET(request, { params }) {
    const { id } = params

    try {
        const response = await fetch(URL_API + `/recipes/${id}/information?includeNutrition=true`, requestGet)
        const data = await response.json()

        return Response.json({ data })
    }
    catch (error) {
        return Response.json(error)
    }
}
