import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect, useContext } from 'react'

import { Pagination } from '@mui/material'

import { getRecipes } from './_controllers/get_data.js'
import { searchContext } from '../../context/search_context.js'

export default function ResultsPagination(props) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page')
    const search = searchParams.get('search')

    const {
        dietOption,
        intolerancesOption,
        cuisineOption,
    } = useContext(searchContext)

    const options = { diet: dietOption, intolerances: intolerancesOption, cuisine: cuisineOption }

    const changePage = (event, value) => {
        props.setResults({ results: [] })
        getRecipes(search, options, value * props.number).then(res => props.setResults(res))
        router.push(`/results_list?search=${search}&page=${value}`)
    }

    return (
        <Pagination
            count={props.totalResults ? Math.floor(props.totalResults / props.number) : 0}
            page={page ? parseInt(page) : 1}
            onChange={changePage}
            sx={props.totalResults ?
                {
                    paddingTop: '1rem',
                    display: 'flex',
                    justifyContent: 'center'
                } :
                { display: 'none' }} />
    )
}
