'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect, useContext } from 'react'
import { useSearchParams } from 'next/navigation'

import { Container, Grid } from '@mui/material'

import { ResultsPagination } from './results_paginations.jsx'
import Results from './results.jsx'

import { getRecipes } from './_controllers/get_data.js'
import { searchContext } from '../../context/search_context.js'

export default function ResultList() {
    const route = useRouter()
    const searchParams = useSearchParams()
    const search = searchParams.get('search')

    let [results, setResults] = useState({ results: [] })

    const {
        dietOption,
        intolerancesOption,
        cuisineOption,
    } = useContext(searchContext)

    useEffect(() => {
        if (search) {
            getRecipes(search, { diet: dietOption, intolerances: intolerancesOption, cuisine: cuisineOption }).then(res => setResults(res))
            route.push(`/results_list?search=${search}`)
        }
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

            <ResultsPagination
                number={results.number}
                totalResults={results.totalResults}
                setResults={setResults} />
        </Container>
    )
}
