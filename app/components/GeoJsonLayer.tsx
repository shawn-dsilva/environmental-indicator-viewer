import React, { useEffect } from 'react';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Style, Fill, Stroke } from 'ol/style';
import useMapStore from '@/app/hooks/useMapStore'; // Adjust path as needed

const GeoJsonLayer = () => {
    const map = useMapStore((state) => state.map);
    const geojson = useMapStore((state) => state.selectedGeojson);

    useEffect(() => {
        if (!map) return;

        // const vectorSource = new VectorSource({
        //     features: new GeoJSON().readFeatures(geojsonData, {
        //         featureProjection: 'EPSG:3857', // Project GeoJSON coordinates to map projection
        //     }),
        // });

        const vectorLayer = new VectorLayer({
            source: geojson,
            style: new Style({
                fill: new Fill({ color: 'rgba(255, 0, 0, 0.4)' }),
                stroke: new Stroke({ color: 'red', width: 2 }),
            }),
        });

        map.addLayer(vectorLayer);

        return () => {
            map.removeLayer(vectorLayer); // Clean up on unmount
        };
    }, [map, geojson]);

    return null; // This component doesn't render anything directly
};

export default GeoJsonLayer;