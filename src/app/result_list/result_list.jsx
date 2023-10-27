'use client'

import { Container, Grid, Pagination } from '@mui/material'

import Results from './results.jsx'

import { useContext, useEffect, useState } from 'react'
import { searchContext } from '@/context/search_context.js'

import getRecipes from './get_data.js'

export default function ResultList() {
    let search = useContext(searchContext).search
    let [results, setResults] = useState([])
    let [page, setPage] = useState(1)

    const changePage = (event, value) => {
        setPage(value)
        getRecipes(search, setResults, value * results.number)
    }

    useEffect(() => {
        if (search)
            getRecipes(search, setResults)
    }, [search])

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
                    page={page}
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
