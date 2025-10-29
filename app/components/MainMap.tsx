'use client';
import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const MainMap = () => {
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new Map({
            target: mapContainer.current, // Link to the DOM element
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });

        return () => map.dispose(); // Clean up on unmount
    }, []);

    return <div ref={mapContainer} className='w-[97%] h-svh'></div>;
};

export default MainMap;