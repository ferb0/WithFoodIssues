import { useSelector } from 'react-redux'

import { Container, Grid } from '@mui/material'
import Results from './results.jsx'

export default function ResultList() {

    let results = useSelector(state => state.results.results)

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
        </Container>
    )
}
