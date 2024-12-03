
import { useState } from 'react'
const [afficherservices, Setafficherservices] = useState(false)
const [afficheraccueil, Setafficheraccueil] = useState(true)

export function setAccueil() {
    Setafficherservices(false)
    Setafficheraccueil(true)
}

export function setServices() {
    Setafficherservices(true)
    Setafficheraccueil(false)
}