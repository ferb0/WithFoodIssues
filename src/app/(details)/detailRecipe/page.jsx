'use client'
import { useSearchParams } from 'next/navigation'
import { Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import ResumeDetail from './resume.jsx'
import NutritionsDetails from '../_common/nutritions_detail.jsx'
import Instructions from './instructions.jsx'
import SimilarRecipes from './similar.jsx'

export default function DetailResult() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    let [info, setInfo] = useState({})

    useEffect(() => {
        setInfo({})
        fetch(`/api/info_recipe/${id}`)
            .then(res => res.json())
            .then(res => setInfo(res.data))
    }, [id])

    return (
        <Stack spacing={2}>
            <Typography
                variant='h4'
                sx={{ paddingTop: '1rem' }}
                align='center'>
                {info.title}
            </Typography>

            <ResumeDetail image={info.image} summary={info.summary} source={info.sourceUrl} />
            <NutritionsDetails idRecipe={id} nutrition={info.nutrition} ingredientsArray={info.extendedIngredients} />
            <Instructions instructions={info.analyzedInstructions} />
            <SimilarRecipes idRecipe={id} />

        </Stack>
    )
}
