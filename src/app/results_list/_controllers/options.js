import { dietOptions, intolerancesOptions, cuisineOptions } from '@/global_objects/recipes_options'

export const optionsControl = (options) => {
    if ((dietOptions.includes(options.diet) || options.diet === '') &&
        (intolerancesOptions.includes(options.intolerances) || options.intolerances === '') &&
        (cuisineOptions.includes(options.cuisine) || options.cuisine === ''))
        return options
    return {}
}

export const objectToQuery = (object) => {
    let url = ''

    for (const property in object) {
        if (object[property])
            url += `&${property}=${object[property]}`
    }

    return url
}
