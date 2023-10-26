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
        fetch(`/api/info_recipe?id=${id}`)
            .then(response => {
                if (!response.ok) throw Error(response.status)
                return response.json()
            })
            .then((response) => setInfo(response.data))
            .catch(() => setInfo({}))
    }, [])

    return (
        <div>
            <h2>{info.title}</h2>
            <Typography
                dangerouslySetInnerHTML={{ __html: info.summary }} />
        </div>
    )
}
