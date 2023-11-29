'use client'
import { useSearchParams } from 'next/navigation'
import { Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import { ResumeDetail } from './resume'
import { IngredientsDetail } from './ingredientsDetail'
import { NutritionsDetails } from './nutritions_detail'

export default function DetailResult() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    let [info, setInfo] = useState({})

    useEffect(() => {
        fetch(`/api/info_recipe/${id}`)
            .then(res => res.json())
            .then(res => setInfo(res.data))
    }, [])

    return (
        <Stack spacing={2}>
            <Typography
                variant='h4'
                sx={{ paddingTop: '1rem' }}>
                {info.title}
            </Typography>

            <ResumeDetail image={info.image} summary={info.summary} source={info.sourceUrl} />

            <IngredientsDetail ingredientsArray={info.extendedIngredients} />

            <NutritionsDetails nutrition={info.nutrition} />
        </Stack>
    )
}
