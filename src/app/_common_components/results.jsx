import Link from 'next/link'
import { Card, Typography, CardActions, Button, CardContent } from '@mui/material'
import Image from 'next/image'

import { linkTheme } from '@/global_objects/theme.js'
import { imageBlurResult } from '@/global_objects/image_blur_result.js'

export default function Results(props) {
    const { id, title, summary, imageType } = props.element
    const SIZE = '312x231'

    return (
        <Card sx={{ maxWidth: 270, marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem' }}>
            <Image
                src={`https://spoonacular.com/recipeImages/${id}-${SIZE}.${imageType}`}
                width={'312'}
                height={'231'}
                alt={title}
                placeholder='blur'
                blurDataURL={imageBlurResult} />
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
