import React, { useEffect } from 'react'
import axios from 'axios'

import './styles.css'

export default function RestaurantHeader() {

    // useEffect(async () => {
    //     const { ...info } = await axios.get()
    // }, [])

    return (
        <header className="restaurant-header">
            <h1 className="restaurant-name">
                Restaurante do zé
            </h1>
            <h2 className="restaurant-description">
                vendedor de carne
            </h2>
        </header>
    )
}