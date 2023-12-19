import { objectToQuery, optionsControl } from './options.js'

export async function getRecipes(search, options = {}, offSet = 0) {
    let URL = `/api/search_recipes?ingredients=${search}&offSet=${offSet}`

    // Se controla que las opciones sean las correctas.
    options = optionsControl(options)

    // Se convierte opciones enquery.
    URL += objectToQuery(options)

    let results = (await fetch(URL)).json()
    return results
}
