import { URL } from 'url'
import { requestGet } from '../requestAPI.js'
const URL_API = process.env.API_BASE_URL

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    try {
        const response = await fetch(URL_API + `/recipes/${id}/information`, requestGet)
        const data = await response.json()

        return Response.json({ data })
    }
    catch (error) {
        return Response.json(error)
    }
}
