const URL_API = process.env.API_BASE_URL
const API_KEY = process.env.API_KEY
const URL = require('url').URL

let requestGet = {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
    },
    method: 'GET'
}

export async function GET(request, { params }) {
    const { searchParams } = new URL(request.url)
    const ingredient = searchParams.get('Ingredients')
    try {
        const response = await fetch(URL_API + `/recipes/complexSearch?includeIngredients=${ingredient}`, requestGet)
        const data = await response.json()
        
        return Response.json(data)
    } catch (error) {
        return Response.json(error)
    }

}
