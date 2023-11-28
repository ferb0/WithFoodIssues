'use client'
import { usePathname } from 'next/navigation'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export default function DetailResult() {
    const path = usePathname()
    // Tengo que limpiar el path para solo quedarme con el id.
    const id = path.split('/').slice(-1)[0]
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
