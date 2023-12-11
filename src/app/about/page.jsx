import { Typography, Link, Stack } from '@mui/material'

export default function About() {
    return (
        <Stack spacing={2}>
            <Typography variant='h3' align='center'>About</Typography>

            <Typography align='center'>
                This is a project with the purpose of putting into practice the new knowledge that is learned about the study of <Link
                    align='center'
                    href='https://nextjs.org/'
                    target='_blank'
                    rel='noreferrer'
                    color='secondary'>
                    NextJS
                </Link>. The idea is to avoid using external libraries and only use what <Link
                    align='center'
                    href='https://nextjs.org/'
                    target='_blank'
                    rel='noreferrer'
                    color='secondary'>
                    NextJS
                </Link> already provides. Additionally, <Link
                    align='center'
                    href='https://mui.com/'
                    target='_blank'
                    rel='noreferrer'
                    color='secondary'>
                    MUI
                </Link> is used for the visual part.
            </Typography>

            <Link
                align='center'
                href='https://www.ferb.ar/'
                target='_blank'
                rel='noreferrer'
                color='secondary'>
                Created by ferb.
            </Link>
        </Stack>
    )
}
