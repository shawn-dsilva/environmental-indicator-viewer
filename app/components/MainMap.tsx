"use client";
import { useEffect, useRef } from "react";
import "ol/ol.css";
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
import OSM from "ol/source/OSM";
// import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import geojsonCountry from "../assets/Kenya_Country.json";
import { transform } from "ol/proj";
import { Map, View, TileLayer, VectorLayer } from "react-openlayers";
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import DragPan from 'ol/interaction/DragPan';
import PinchZoom from 'ol/interaction/PinchZoom';
import PinchRotate from 'ol/interaction/PinchRotate';

const MainMap = () => {
    const geoJSONFeatures = new GeoJSON().readFeatures(geojsonCountry, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857",
    });

    // create vector source
    const vectorSource = new VectorSource({
        features: geoJSONFeatures,
    });

    return (
        <Map style={{ width: '100%', height: "100%" }} interactions={[new MouseWheelZoom(), new DragPan(), new PinchRotate(), new PinchZoom()]}>
            <TileLayer source={new OSM()} />
            <VectorLayer source={vectorSource} />
            <View
                center={transform(
                    [37.91567242980515, 0.170945],
                    "EPSG:4326",
                    "EPSG:3857"
                )}
                zoom={7}
            />
        </Map>
    );
};

export default MainMap;
