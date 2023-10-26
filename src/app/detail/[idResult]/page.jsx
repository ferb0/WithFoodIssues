'use client'
import { usePathname } from 'next/navigation'
// import { useEffect } from 'react';
// import { cleanRecepiesInformation, searchRecepiesInformation } from '@/redux/actions';
//import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

export default function DetailResult() {
    const path = usePathname()
    // Tengo que limpiar el path para solo quedarme con el id.
    const id = path.split('/').slice(-1)[0]

    //const information = useSelector(state => state.recepieInfo)

    // useEffect(() => {
    //     dispatch(searchRecepiesInformation(id))
    //     return function () {
    //         dispatch(cleanRecepiesInformation())
    //     }
    // }, [dispatch, id])

    return (
        <div>
            <h2>{information.title}</h2>
            <Typography 
            dangerouslySetInnerHTML={{ __html: information.summary }} />
        </div>
    )
}
