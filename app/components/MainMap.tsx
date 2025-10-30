'use client';
import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from "ol/source/OSM"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import GeoJSON from "ol/format/GeoJSON"
import { getCenter } from 'ol/extent';

const geojsonObject = {
    type: "Feature",
    geometry: {
        type: "MultiLineString",
        coordinates: [
            [
                [-1e6, -7.5e5],
                [-1e6, 7.5e5],
            ],
            [
                [1e6, -7.5e5],
                [1e6, 7.5e5],
            ],
            [
                [-7.5e5, -1e6],
                [7.5e5, -1e6],
            ],
            [
                [-7.5e5, 1e6],
                [7.5e5, 1e6],
            ],
        ],
    },
}

const MainMap = () => {
    const mapContainer = useRef();

    const geoJSONFeatures = new GeoJSON().readFeatures(geojsonObject)

    // create vector source
    const vectorSource = new VectorSource({
        features: geoJSONFeatures,
    })

    // create vector layer with source
    const vectorLayer = new VectorLayer({
        source: vectorSource,
    })
    useEffect(() => {
        const map = new Map({
            target: mapContainer.current, // Link to the DOM element
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                vectorLayer
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });

        return () => map.dispose(); // Clean up on unmount
    }, []);

    return <div ref={mapContainer} id='map' className=' w-[97%]'></div>;
};

export default MainMap;