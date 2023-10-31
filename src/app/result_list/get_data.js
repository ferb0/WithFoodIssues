import { optionsControl } from "./options_control"

export function getRecipes(search, setResults, offSet = 0, options = {}) {
    let URL = `/api/search_recipes?ingredients=${search}&offSet=${offSet}`

    options = optionsControl(options)

    // Se convierte opciones enquery.
    for (const property in options) {
        if (options[property])
            URL += `&${property}=${options[property]}`
    }

    console.log('URL', URL)
    // fetch(URL)
    //     .then(response => {
    //         if (!response.ok) throw Error(response.status)
    //         return response.json()
    //     })
    //     .then((response) => setResults(response))
    //     .catch(() => setResults({ results: [] }))
}
