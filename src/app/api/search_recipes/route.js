import { URL } from 'url'

const URL_API = process.env.API_BASE_URL

const requestGet = {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY
    },
    method: 'GET'
}

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const ingredients = searchParams.get('Ingredients')

    try {
        const response = await fetch(URL_API + `/recipes/complexSearch?includeIngredients=${ingredients}`, requestGet)
        const data = await response.json()

        return Response.json(data)
    }
    catch (error) {
        return Response.json(error)
    }
}
