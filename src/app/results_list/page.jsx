'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { Container, Grid } from '@mui/material'

import { ResultsPagination } from './results_paginations.jsx'
import Results from './results.jsx'

import { getRecipes } from './_controllers/get_data.js'
export default function ResultList() {
    const searchParams = useSearchParams()

    let [results, setResults] = useState({ results: [] })

    const search = searchParams.get('search')

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

            <ResultsPagination
                number={results.number}
                totalResults={results.totalResults}
                setResults={setResults} />

        </Container>
    )
}
