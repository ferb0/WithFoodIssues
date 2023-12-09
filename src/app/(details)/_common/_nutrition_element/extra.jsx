import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Skeleton, Typography } from '@mui/material'

export default function Extra({ properties }) {
    return (
        <TableContainer
            size='small'
            component={Paper}
            sx={{ width: 'auto', padding: '1rem', margin: 'auto', marginTop: '0.5rem', marginBottom: '1rem' }}>
            <Table sx={{ maxWidth: 400 }}>
                {properties ?
                    <TableBody>
                        {properties?.map(element =>
                            <TableRow key={element.name} sx={{ border: 0 }}>
                                <TableCell>
                                    <Typography>
                                        {`${element.name}: ${element.amount.toString().slice(0, 5)}${element.unit}.`}
                                    </Typography>
                                </TableCell>
                            </TableRow>)}
                    </TableBody>
                    :
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Skeleton variant="text" width='9rem' />
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Skeleton variant="text" width='9rem' />
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Skeleton variant="text" width='9rem' />
                            </TableCell>
                        </TableRow>
                    </TableBody>}
            </Table>
        </TableContainer>
    )
}
