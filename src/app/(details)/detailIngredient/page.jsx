'use client'
import { useSearchParams } from 'next/navigation'
import { Stack, Typography, Card, CardMedia, CardContent, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { NutritionsDetails } from '../_common/nutritions_detail'

let URL_IMAGE = 'https://spoonacular.com/cdn/ingredients_250x250/'

export default function DetailResult() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    let [info, setInfo] = useState({})

    useEffect(() => {
        fetch(`/api/info_ingredient/${id}`)
            .then(res => res.json())
            .then(res => setInfo(res.data))
    }, [])

    return (
        <Stack
            direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }}>
            <Card sx={{ maxWidth: 345, margin: 'auto', marginTop: '0rem' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={URL_IMAGE + info.image}
                    title={info.name}
                />
                <CardContent>
                    <Typography
                        variant='h4'
                        sx={{ paddingTop: '1rem' }}
                        align='center'>
                        {info.name?.charAt(0).toUpperCase() + info.name?.slice(1)}
                    </Typography>
                </CardContent>
            </Card>

            <Box
                sx={{
                    padding: { xs: '1rem', sm: '1rem', md: '0rem', lg: '0rem', xl: '0rem' },
                    margin: 'auto',
                    marginTop: '0rem'
                }}>
                <NutritionsDetails nutrition={info.nutrition} ingredientsArray={null} />
            </Box>
        </Stack>
    )
}
