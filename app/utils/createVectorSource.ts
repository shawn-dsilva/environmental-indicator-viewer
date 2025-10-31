import GeoJSON from "ol/format/GeoJSON";
import VectorSource from "ol/source/Vector";

export const createVectorSource = (geojson) => {
const geoJSONFeatures = new GeoJSON().readFeatures(geojson, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857",
    });

    // create vector source
    const vectorSource = new VectorSource({
        features: geoJSONFeatures,
    });

    return vectorSource
}

