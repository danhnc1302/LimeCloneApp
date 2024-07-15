import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Mapbox, { MapView, Camera, LocationPuck, ShapeSource, SymbolLayer, Images } from '@rnmapbox/maps'
import { featureCollection, point } from "@turf/helpers"
import pin from "~/assets/pin.png"

const ACCESS_TOKEN = process.env.EXPO_PUBLIC_MAPBOX_KEY || ''
Mapbox.setAccessToken(ACCESS_TOKEN)

const Map = () => {
    return (
        <MapView style={{ flex: 1 }} styleURL="mapbox://styles/mapbox/dark-v11">
            <Camera followZoomLevel={16} followUserLocation/>
            <LocationPuck puckBearingEnabled puckBearing="heading" pulsing={{ isEnabled: true }}/>
            <ShapeSource id="scooters" shape={featureCollection([point([2.1589,41.3907]), point([2.1589,41.3907])])}>
                <SymbolLayer
                    id="scooter-icons"
                    style={{
                        iconImage: 'pin'
                    }}
                />
                <Images images={{ pin }}/>
            </ShapeSource>

        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})