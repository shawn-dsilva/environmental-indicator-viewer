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

const MainMap = () => {
    const mapContainer = useRef();
    const geoJSONFeatures = new GeoJSON().readFeatures(geojsonCountry, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857",
    });

    // create vector source
    const vectorSource = new VectorSource({
        features: geoJSONFeatures,
    });

    // create vector layer with source
    // const vectorLayer = new VectorLayer({
    //     source: vectorSource,
    // })
    // useEffect(() => {
    //     const map = new Map({
    //         target: mapContainer.current, // Link to the DOM element
    //         layers: [
    //             new TileLayer({
    //                 source: new OSM(),
    //             }),
    //             vectorLayer
    //         ],
    //         view: new View({
    //             center: transform([
    //                 37.91567242980515,
    //                 0.170945,
    //             ],
    //                 "EPSG:4326",
    //                 "EPSG:3857",),
    //             zoom: 7,
    //         }),
    //     });

    //     map.on('click', function (event) {
    //         // The 'event' object contains information about the click
    //         const clickedCoordinate = event.coordinate;

    //         // The coordinates are in the map's view projection (e.g., Web Mercator by default)
    //         console.log("Clicked at coordinates (in map projection):", clickedCoordinate);

    //         // If you need the coordinates in a different projection (e.g., Latitude/Longitude),
    //         // you can transform them using ol/proj.transform
    //         const lonLatCoordinate = transform(clickedCoordinate, 'EPSG:3857', 'EPSG:4326');
    //         console.log("Clicked at Lon/Lat:", lonLatCoordinate);

    //         // You can then use these coordinates for various purposes, such as:
    //         // - Displaying a popup at the clicked location
    //         // - Adding a marker at the clicked location
    //         // - Performing a WMS GetFeatureInfo request
    //     });
    //     return () => map.dispose(); // Clean up on unmount
    // }, []);

    // return <div ref={mapContainer} id='map' className=' w-[97%]'></div>;
    return (
        <Map controls={[]} interactions={[]} style={{ width: '100%', height: "100%" }}>
            <TileLayer source={new OSM()} />
            <VectorLayer source={vectorSource} />
            <View
                center={transform(
                    [37.91567242980515, 0.170945],
                    "EPSG:4326",
                    "EPSG:3857"
                )}
                zoom={4}
            />
        </Map>
    );
};

export default MainMap;
