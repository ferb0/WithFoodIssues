'use client'

import { useContext, useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

import { Container, Grid, Pagination } from '@mui/material'

import Results from './results.jsx'

import { searchContext } from '@/context/search_context.js'

import { getRecipes } from './get_data.js'

export default function ResultList() {
    let { search,
        results, setResults,
        dietOption,
        intolerancesOption,
        cuisineOption
    } = useContext(searchContext)

    const options = {
        diet: dietOption,
        intolerances: intolerancesOption,
        cuisine: cuisineOption
    }

    const router = useRouter()
    const searchParams = useSearchParams()

    let [page, setPage] = useState(searchParams.get('page'))

    const changePage = (event, value) => {
        setPage(value)
        getRecipes(search, setResults, value * results.number)
        router.push(`?page=${value}`)
    }

    useEffect(() => {
        if (search)
            getRecipes(search, setResults, results.number ? page * results.number : 0, options)
    }, [search, dietOption, intolerancesOption, cuisineOption])

    return (
        <Container sx={{ padding: '1rem' }}>
            <Grid
                container
                spacing={2}>
                {results.results?.map(el =>
                    <Grid
                        item
                        key={el.id}
                        xs={12} sm={6} md={4} lg={4}>
                        <Results key={el.id} element={el} />
                    </Grid>)}
            </Grid>
            {results.length != 0 ?
                <Pagination
                    count={Math.ceil(results.totalResults / results.number)}
                    page={page ? parseInt(page) : 1}
                    onChange={changePage}
                    sx={{
                        paddingTop: "1rem",
                        display: 'flex',
                        justifyContent: 'center'
                    }} />
                :
                null}
        </Container>
    )
}
