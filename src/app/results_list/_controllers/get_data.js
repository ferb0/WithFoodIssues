import { optionsControl } from "./options_control"

export async function getRecipes(search, offSet = 0, options = {}) {
    let URL = `/api/search_recipes?ingredients=${search}&offSet=${offSet}`

    // Se controla que las opciones sean las correctas.
    options = optionsControl(options)

    // Se convierte opciones enquery.
    for (const property in options) {
        if (options[property])
            URL += `&${property}=${options[property]}`
    }

    let results = (await fetch(URL)).json()
    return results
}
