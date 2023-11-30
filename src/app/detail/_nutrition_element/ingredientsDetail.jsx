import { Typography, Card, Stack, TableHead } from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material"

export const IngredientsDetail = ({ ingredientsArray }) => {
    return (
                <TableContainer
                    size='small'
                    component={Paper}
                    sx={{ width: 'auto', padding: '1rem', margin: 'auto', marginTop: '0rem' }}>
                    <Table sx={{ maxWidth: 400 }}>
                        <TableBody>
                            {ingredientsArray?.map(element =>
                                <TableRow key={element.id} sx={{ border: 0 }}>
                                    <TableCell>{element.name[0].toUpperCase() + element.name.substring(1)}</TableCell>
                                    <TableCell> {element.measures.metric.amount + ' ' + element.measures.metric.unitShort}</TableCell>
                                </TableRow>)}
                        </TableBody>
                    </Table>
                </TableContainer>
    )
}
