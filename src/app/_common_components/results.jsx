import Link from 'next/link'
import { Card, Typography, CardMedia, CardActions, Button, CardContent } from '@mui/material'

import { linkTheme } from '@/global_objects/theme'

export default function Results(props) {
    let { id, title, image, summary } = props.element

    return (
        <Card sx={{ maxWidth: 345 }}>
            {image ? <CardMedia
                sx={{ height: 140 }}
                image={image}
                title={title}
            /> : null}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                {summary ? <Typography variant="body2" color="text.secondary"
                    dangerouslySetInnerHTML={{ __html: summary }} /> : null}
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link href={`/detailRecipe?id=${id}`} style={linkTheme}>Detalles</Link>
                    </Button>
            </CardActions>
        </Card>
    )
}
