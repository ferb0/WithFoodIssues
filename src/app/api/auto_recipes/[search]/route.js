const URL_API = process.env.API_BASE_URL
import { requestGet } from '../../requestAPI.js'

export async function GET(request, { params }) {
    const { search } = params

    try {
        const response = await fetch(URL_API + `/food/ingredients/autocomplete?number=10&metaInformation=true&query=${search}`, requestGet)
        let data = await response.json()
        data = data.map(elem => {
            return { id: elem.id, name: elem.name }
        })

        return Response.json({ data })
    }
    catch (error) {
        return Response.json(error)
    }
}
