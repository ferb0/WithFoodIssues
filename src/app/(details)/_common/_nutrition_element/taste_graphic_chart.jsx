import React from 'react'

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { formateChart } from './_controllers/formated_data_chart.js';
import { Card } from '@mui/material';

const captions = {
    // columns
    bitterness: 'Bitterness',
    fattiness: 'Fattiness',
    saltiness: 'Saltiness',
    savoriness: 'Savoriness',
    sourness: 'Sourness',
    spiciness: 'Spiciness',
    sweetness: 'Sweetness'
}

export default function TasteChart({ idRecipe }) {
    const [dataTaste, setDataTaste] = React.useState([])

    React.useEffect(() => {
        fetch(`/api/info_recipe/radar_chart/${idRecipe}`)
            .then(res => res.json())
            .then(res =>
                setDataTaste([{ data: formateChart(res.data), meta: { color: 'orange' } }]))
    }, [])

    return (
        <Card sx={{ display: 'flex', margin: 'auto', marginBottom: { xs: '1rem', sm: '1rem' } }}>
            <RadarChart
                captions={captions}
                data={dataTaste} />
        </Card>
    )
}
