'use client'

import { Container, Grid, Pagination } from '@mui/material'

import Results from './results.jsx'

import { useContext, useEffect, useState } from 'react'
import { searchContext } from '@/context/search_context.js'

export default function ResultList() {
    let search = useContext(searchContext).search
    let [results, setResults] = useState([])

    const changePage = (event, value) => {
        console.log(value)
    }

    useEffect(() => {
        if (search)
            fetch(`/api/search_recipes?Ingredients=${search}`)
                .then(response => {
                    if (!response.ok) throw Error(response.status)
                    return response.json()
                })
                .then((response) => setResults(response.results))
                .catch(() => setResults([]))
    }, [search])

    return (
        <Container sx={{ padding: '1rem' }}>
            <Grid
                container
                spacing={2}>
                {results?.map(el =>
                    <Grid
                        item
                        key={el.id}
                        xs={12} sm={6} md={4} lg={4}>
                        <Results key={el.id} element={el} />
                    </Grid>)}
            </Grid>
            {results.length != 0 ? 
            <Pagination
                count={10} page={0} onChange={changePage}
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
