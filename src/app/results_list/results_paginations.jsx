import { useSearchParams, useRouter } from 'next/navigation'

import { Pagination } from '@mui/material'

import { getRecipes } from './_controllers/get_data.js'

export const ResultsPagination = (props) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page')
    const search = searchParams.get('search')

    const changePage = (event, value) => {
        props.setResults({ results: [] })
        getRecipes(search, value * props.number).then(res => props.setResults(res))
        router.push(`/results_list?search=${search}&page=${value}`)
    }
    return (
        <Pagination
            count={props.totalResults ? Math.ceil(props.totalResults / props.number) : 0}
            page={page ? parseInt(page) : 1}
            onChange={changePage}
            sx={props.totalResults ?
                {
                    paddingTop: "1rem",
                    display: 'flex',
                    justifyContent: 'center'
                } :
                { display: 'none' }} />
    )
}
