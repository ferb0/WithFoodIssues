import { Card, TableContainer, Table, TableBody, TableRow, Paper, TableCell, TableHead, Typography } from '@mui/material'
import Image from 'next/image'

import { imageBlurResult } from '@/global_objects/image_blur_result.js'

export default function InstructionsTable({ elements, nameTable }) {
    const SIZE = '100x100'
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
                            <TableRow key={element.id + element.name} sx={{ border: 0 }}>
                                <TableCell sx={{textAlign: 'center', display: 'flex'}}>
                                    <Image
                                    src={`https://spoonacular.com/cdn/equipment_${SIZE}/${element.name}.jpg`}
                                    width={'30'}
                                    height={'30'}
                                    alt={`${element.name}_image`}
                                    placeholder='blur'
                                    blurDataURL={imageBlurResult} />
                                    <Typography>{element.name}</Typography>
                                    </TableCell>
                                </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}
