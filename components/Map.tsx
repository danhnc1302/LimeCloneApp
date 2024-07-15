import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Mapbox, { MapView } from '@rnmapbox/maps'

const ACCESS_TOKEN = "pk.eyJ1IjoiZGFuaG5ndXllbmNvbmciLCJhIjoiY2x5bjNyajN2MDI2NTJqb2FvaXoxOGR2MyJ9.EQsx585DZ4pMB7nUA4ZUaw"
Mapbox.setAccessToken(ACCESS_TOKEN)

const Map = () => {
    return (
        <MapView style={{ flex: 1 }} styleURL="mapbox://styles/mapbox/dark-v11" />
    )
}

export default Map

const styles = StyleSheet.create({})