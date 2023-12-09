import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Skeleton, Typography } from '@mui/material'

export default function Nutrients({ infoNutrients }) {
    const skeletonArray = new Array(20).fill(0)
    return (
        <TableContainer
            size='small'
            component={Paper}
            sx={{
                width: 'auto', padding: '1rem', margin: 'auto',
                marginBottom: { sm: '1rem', md: 'auto', sm: 'auto', lg: 'auto', xl: 'auto' }
            }}>
            <Table sx={{ maxWidth: 400 }}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center' sx={{ padding: '0.5rem' }}>
                            <Typography variant='h6'>
                                Name
                            </Typography>
                        </TableCell>
                        <TableCell align='center' sx={{ padding: '0.5rem' }}>
                            <Typography variant='h6'>
                                Amount
                            </Typography>
                        </TableCell>
                        <TableCell align='center' sx={{ padding: '0.5rem' }}>
                            <Typography variant='h6'>
                                Percent Of Daily Needs
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                {infoNutrients ?
                    <TableBody>
                        {infoNutrients?.map(elem =>
                            <TableRow key={elem.name} sx={{ border: 0 }}>
                                <TableCell align='center' sx={{ padding: '0.5rem' }}>
                                    <Typography>
                                        {elem.name}
                                    </Typography>
                                </TableCell>
                                <TableCell align='center' sx={{ padding: '0.5rem' }}>
                                    <Typography>
                                        {elem.amount} {elem.unit}
                                    </Typography>
                                </TableCell>
                                <TableCell align='center' sx={{ padding: '0.5rem' }}>
                                    <Typography>
                                        {elem.percentOfDailyNeeds} %
                                    </Typography>
                                </TableCell>
                            </TableRow>)}
                    </TableBody>
                    :
                    <TableBody>
                        {skeletonArray.map(() =>
                            <TableRow>
                                <TableCell>
                                    <Skeleton variant='text' width='6rem' />
                                </TableCell>
                                <TableCell>
                                    <Skeleton variant='text' width='6rem' />
                                </TableCell>
                                <TableCell>
                                    <Skeleton variant='text' width='6rem' />
                                </TableCell>
                            </TableRow>)}
                    </TableBody>}
            </Table>
        </TableContainer>
    )
}
