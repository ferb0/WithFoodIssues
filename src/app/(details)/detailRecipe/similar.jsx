import React from 'react'
import { Card, Grid, Typography } from '@mui/material'

import Results from '@/app/_common_components/results.jsx'

export default function SimilarRecipes({ idRecipe }) {
    const [similars, setSimilars] = React.useState([])

    React.useEffect(() => {
        fetch(`/api/info_recipe/similar/${idRecipe}`)
            .then(res => res.json())
            .then(res => setSimilars(res.data))
    }, [])

    return (
        <Card>
            <Typography
                variant='h5'
                sx={{ textAlign: 'center' }}>
                Similar Recipes
            </Typography>
            <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
                {similars?.map(elem =>
                    <Grid item key={elem.id} xs={2} sm={4} md={3}
                        sx={{ padding: '1rem', margin: 'auto', flexBasis: 'auto' }}>
                        <Results key={elem.id} element={elem} />
                    </Grid>)}
            </Grid>
        </Card>
    )
}
