export default function getRecipes(search, setResults, offSet = 0) {
    fetch(`/api/search_recipes?ingredients=${search}&offSet=${offSet}`)
        .then(response => {
            if (!response.ok) throw Error(response.status)
            return response.json()
        })
        .then((response) => setResults(response))
        .catch(() => setResults([]))
}
