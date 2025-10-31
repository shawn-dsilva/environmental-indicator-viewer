"use client";
import "ol/ol.css";
import OpenLayersMap from "./OpenLayersMap";
import GeoJsonLayer from "./GeoJsonLayer";

const MainMap = () => {
    return (
        <OpenLayersMap center={[37.91567242980515, 0.170945]} zoom={7}>
            <GeoJsonLayer />
        </OpenLayersMap>
    );
};

export default MainMap;
