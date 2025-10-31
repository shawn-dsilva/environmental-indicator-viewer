import React, { useEffect } from 'react';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Style, Fill, Stroke } from 'ol/style';
import useMapStore from '@/app/hooks/useMapStore'; // Adjust path as needed
import { createVectorSource } from '../utils/createVectorSource';

const GeoJsonLayer = () => {
    const map = useMapStore((state) => state.map);
    const geojson = useMapStore((state) => state.selectedGeojson);

    useEffect(() => {
        if (!map) return;

        const vectorLayer = new VectorLayer({
            source: createVectorSource(geojson),
            style: new Style({
                fill: new Fill({ color: 'rgba(2, 74, 112, 0.6)' }),
                stroke: new Stroke({ color: 'blue', width: 2 }),
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