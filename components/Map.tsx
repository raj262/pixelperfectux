'use client';

import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { mapData } from '@/lib/siteData';

interface LatLng {
    lat: number;
    lng: number;
}

export default function Map() {
    const [map, setMap] = useState<google.maps.Map | null>(null);

    const mapStyles: React.CSSProperties = {
        width: '100%',
        height: '350px',
        borderRadius: '25px',
        marginTop: '3rem',
        transition: 'ease-out 0.16s',
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const defaultCenter: LatLng = {
        lat: Number(mapData.latitude),
        lng: Number(mapData.longitude)
    };

    // Validate coordinates
    if (isNaN(defaultCenter.lat) || isNaN(defaultCenter.lng)) {
        return <div>Error: Invalid coordinates. Please check mapData.</div>;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const onLoad = useCallback((map: google.maps.Map) => {
        const bounds = new window.google.maps.LatLngBounds(defaultCenter);
        map.fitBounds(bounds);
        setMap(map);
        console.log("Map loaded successfully");
    }, [defaultCenter]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    if (loadError) {
        return <div>Error loading maps: {loadError.message}</div>;
    }

    if (!isLoaded) return (
        <div className="preloader">
            <div className="loader"></div>
        </div>
    );

    return (
        <GoogleMap
            mapContainerStyle={mapStyles}
            center={defaultCenter}
            zoom={13}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                disableDefaultUI: false,
                zoomControl: true,
                streetViewControl: true,
                mapTypeControl: true,
                fullscreenControl: true,
            }}
        >
            <Marker position={defaultCenter} />
        </GoogleMap>
    );
}