### How To Run

Install packages
```
npm i 
```

Run Dev Server

```
npm run dev
```


### Learnings

- The `VectorLayer` component from `react-openlayers` doesn't re-render the map upon changes in it's `source` prop
- This was resolved by removing `react-openlayers` and using implementing custom Map and GeoJsonLayer components instead using OpenLayers `map` object and methods along with Zustand for state management