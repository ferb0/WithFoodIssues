'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

import { Container, Grid, Pagination } from '@mui/material'

import Results from './results.jsx'

import { getRecipes } from './_controllers/get_data.js'

export default function ResultList() {
    const router = useRouter()
    const searchParams = useSearchParams()

    let [results, setResults] = useState([[]])
    console.log(results)
    const page = searchParams.get('page')
    const search = searchParams.get('search')

    const changePage = (event, value) => {
        getRecipes(search, setResults, value * results.number)
        router.push(`&page=${value}`)
    }

    useEffect(() => {
        if (search)
            getRecipes(search).then(res => setResults(res))
    }, [])

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
            {/* {results.length != 0 ?
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
                null} */}
        </Container>
    )
}
