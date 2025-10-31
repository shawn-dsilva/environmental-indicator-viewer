"use client";
import { useEffect, useRef, useState } from "react";
import "ol/ol.css";
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
import OSM from "ol/source/OSM";
// import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import geojsonCountry from "../assets/Kenya_Country.json";
import geojsonSubdiv from "../assets/Kenya_Rename_Subdiv.json";

import { transform } from "ol/proj";
import { Map, View, TileLayer, VectorLayer as VectorLayerComponent } from "react-openlayers";
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import DragPan from 'ol/interaction/DragPan';
import PinchZoom from 'ol/interaction/PinchZoom';
import PinchRotate from 'ol/interaction/PinchRotate';
import useMapStore from '@/app/hooks/useMapStore'; // Adjust path as needed
import VectorLayer from "ol/layer/Vector";
import OpenLayersMap from "./OpenLayersMap";
import GeoJsonLayer from "./GeoJsonLayer";

const MainMap = () => {
    const mapRef = useRef();
    //         < Map ref = { mapRef } style = {{ width: '100%', height: "100%" }
    // } interactions = { [new MouseWheelZoom(), new DragPan(), new PinchRotate(), new PinchZoom()]} >
    //     <TileLayer source={new OSM()} />
    // { geojson && <VectorLayerComponent source={geojson} /> }
    // <View
    //     center={transform(
    //         [37.91567242980515, 0.170945],
    //         "EPSG:4326",
    //         "EPSG:3857"
    //     )}
    //     zoom={7}
    // />
    //         </Map >
    return (
        <OpenLayersMap center={[0, 0]} zoom={2}>
            <GeoJsonLayer />
        </OpenLayersMap>
    );
};

export default MainMap;
