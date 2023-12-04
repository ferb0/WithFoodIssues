import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material'

export default function Extra({ properties }) {
    return (
        <TableContainer
            size='small'
            component={Paper}
            sx={{ width: 'auto', padding: '1rem', margin: 'auto', marginTop: '0.5rem', marginBottom: '1rem' }}>
            <Table sx={{ maxWidth: 400 }}>
                <TableBody>
                    {properties?.map(element =>
                        <TableRow key={element.name} sx={{ border: 0 }}><TableCell>{element.name}: {element.amount.toString().slice(0, 5)}{element.unit}.</TableCell></TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
