export function formateChart(data) {
    let formatedData = {}

    for (const property in data)
        formatedData[`${property}`] = data[property] / 100

    return formatedData
}
