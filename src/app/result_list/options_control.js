import { dietOptions, IntolerancesOptions } from "@/global_objects/recipes_options"

export const optionsControl = (options) => {
    if ((dietOptions.includes(options.diet) || options.diet === '' ) &&
        (IntolerancesOptions.includes(options.intolerances) || options.intolerances === ''))
        return options
    return {}
}
