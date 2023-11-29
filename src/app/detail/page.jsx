'use client'
import { useSearchParams } from 'next/navigation'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import { ResumeDetail } from './resume'

export default function DetailResult() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    let [info, setInfo] = useState({})

    useEffect(() => {
        fetch(`/api/info_recipe/${id}`)
            .then(res => res.json())
            .then(res => setInfo(res.data))
    }, [])
    console.log(info)
    return (
        <div>
            <Typography
                variant='h4'
                sx={{paddingTop:'1rem', paddingBottom: '1rem', display: 'flex'}}>
                {info.title}
            </Typography>

            <ResumeDetail image={info.image} summary={info.summary}/>

            
        </div>
    )
}
