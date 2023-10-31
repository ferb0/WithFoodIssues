import { dietOptions, intolerancesOptions, cuisineOptions } from "@/global_objects/recipes_options"

export const optionsControl = (options) => {
    if ((dietOptions.includes(options.diet) || options.diet === '') &&
        (intolerancesOptions.includes(options.intolerances) || options.intolerances === '') &&
        (cuisineOptions.includes(options.cuisine) || options.cuisine === ''))
        return options
    return {}
}
