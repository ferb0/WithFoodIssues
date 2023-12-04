import * as React from 'react'
import { Typography, Card, Stack, Accordion, AccordionSummary, AccordionDetails, } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import InstructionsTable from './_instructions_tables/instructions_table.jsx'

export default function Instructions({ instructions }) {
    return (
        <Card>
            <Typography
                variant='h5'
                sx={{ textAlign: 'center' }}>
                Recipe Steps
            </Typography>

            {instructions ? instructions[0]?.steps?.map(elem =>
                <Accordion key={elem.number}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                        <Typography>Step {elem.number}: {elem.step}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction='row'>
                            {elem.ingredients != 0 ? <InstructionsTable nameTable={'Ingredients'} elements={elem.ingredients} /> : null}
                            {elem.equipment != 0 ? <InstructionsTable nameTable={'Equipment'} elements={elem.equipment} /> : null}
                        </Stack>
                    </AccordionDetails>
                </Accordion>) : null}
        </Card>
    )
}
