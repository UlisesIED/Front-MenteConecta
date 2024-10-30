import React from 'react'
import {
    BannerHeader,
    DescripcionMente,
    Nosotros,
    PreguntasFrecuentes,
    SeccionDestacada
} from '../../components/landingPage'

export function Home() {
    return (
        <div>
            <BannerHeader />
            <Nosotros />
            <SeccionDestacada />
            <DescripcionMente />
            <PreguntasFrecuentes />
        </div>
    )
}
