'use client'
import { useSearchParams } from 'next/navigation'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export default function DetailResult() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    let [info, setInfo] = useState({})

    useEffect(() => {
        fetch(`/api/info_recipe/${id}`)
            .then(res => res.json())
            .then(res => setInfo(res.data))
    }, [])

    return (
        <div>
            <h2>{info.title}</h2>
            <Typography
                dangerouslySetInnerHTML={{ __html: info.summary }} />
        </div>
    )
}
