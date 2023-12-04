import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, TableHead } from "@mui/material"
import Link from "next/link"
import { linkTheme } from '@/global_objects/theme.js'

export default function IngredientsDetail({ ingredientsArray }) {
    return (
        <TableContainer
            size='small'
            component={Paper}
            sx={{ width: 'auto', padding: '1rem', margin: 'auto', marginTop: '0rem' }}>
            <Table sx={{ maxWidth: 400 }}>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Ingredients</strong></TableCell>
                        <TableCell><strong>Amount</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ingredientsArray?.map(element =>
                        <TableRow key={element.id} sx={{ border: 0 }}>
                            <TableCell>
                                <Link href={`/detailIngredient?id=${element.id}`} style={linkTheme}>
                                    {element.name[0].toUpperCase() + element.name.substring(1)}
                                </Link>
                            </TableCell>
                            <TableCell> {element.measures.metric.amount + ' ' + element.measures.metric.unitShort}</TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
