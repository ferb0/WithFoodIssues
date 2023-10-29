import { dietOptions } from "@/global_objects/recipes_options"

export const optionsControl = (options) => {
    if (dietOptions.includes(options.diet))
        return options
    else return {}
}
