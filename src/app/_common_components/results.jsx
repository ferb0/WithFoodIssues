import Link from 'next/link'
import { Card, Typography, CardMedia, CardActions, Button, CardContent } from '@mui/material'

import { linkTheme } from '@/global_objects/theme.js'

export default function Results(props) {
    const { id, title, image, summary, imageType } = props.element
    const SIZE = '480x360'

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image || `https://spoonacular.com/recipeImages/${id}-${SIZE}.${imageType}`}
                title={title} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {title}
                </Typography>
                {summary ? <Typography variant='body2' color='text.secondary'
                    dangerouslySetInnerHTML={{ __html: summary }} /> : null}
            </CardContent>
            <CardActions>
                <Button size='small'>
                    <Link href={`/detailRecipe?id=${id}`} style={linkTheme}>Detalles</Link>
                </Button>
            </CardActions>
        </Card>
    )
}
