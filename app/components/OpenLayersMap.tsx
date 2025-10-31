import React, { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import useMapStore from '@/app/hooks/useMapStore'; // Adjust path as needed

const OpenLayersMap = ({ children, center, zoom }) => {
    const mapRef = useRef();
    const setMap = useMapStore((state) => state.setMap);

    useEffect(() => {
        const initialMap = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center,
                zoom,
            }),
        });
        setMap(initialMap);

        return () => {
            initialMap.setTarget(undefined); // Clean up on unmount
        };
    }, [center, zoom, setMap]);

    return <div ref={mapRef} style={{ width: '100%', height: '100%' }}>{children}</div>;
};

export default OpenLayersMap;