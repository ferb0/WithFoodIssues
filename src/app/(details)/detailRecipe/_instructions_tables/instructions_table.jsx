import { Card, TableContainer, Table, TableBody, TableRow, Paper, TableCell, TableHead } from '@mui/material'

export default function InstructionsTable({ elements, nameTable }) {
    return (
        <Card sx={{ margin: 'auto' }}>
            <TableContainer
                size='small'
                component={Paper}
                sx={{ width: 'auto', padding: '0.5rem' }}>
                <Table sx={{ maxWidth: 400 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>{nameTable}</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {elements?.map(element =>
                            <TableRow key={element.id + element.name} sx={{ border: 0 }}><TableCell>{element.name}</TableCell></TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}
