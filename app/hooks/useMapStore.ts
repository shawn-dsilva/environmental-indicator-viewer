import { create } from 'zustand';
import { createVectorSource } from '../utils/createVectorSource';
import geojsonCountry from "../assets/Kenya_Country.json";

const useMapStore = create((set) => ({
    map: null, // OpenLayers Map ,
  setMap: (mapInstance) => set({ map: mapInstance }),
  selectedGeojson: geojsonCountry, // Currently selected GeoJSON feature
  setSelectedGeojson: (geojson) => set({ selectedGeojson:geojson }),
  // Add other map-related state and actions as needed
}));

export default useMapStore;
