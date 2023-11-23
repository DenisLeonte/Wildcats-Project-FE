
import React, { useEffect, useRef } from 'react';
import mapboxgl, { LngLatLike, Map } from 'mapbox-gl'
import '../../../styles/EuroMap.css'
import { log } from 'console';

mapboxgl.accessToken = process.env!.REACT_APP_MAPBOX_LK!;

function EuroMap() {
  const mapContainer = useRef<HTMLDivElement |null>(null);
  let e_map = useRef<Map|null>(null);
  const mapCenter:LngLatLike = [18.7155, 48.4122]; // Center of Europe
  

  useEffect(() =>{
    if(e_map.current) return;
    e_map.current = new mapboxgl.Map({
      container: 'map-container',
      style:'mapbox://styles/mapbox/light-v11',
      center: mapCenter,
      zoom:3.84,
    });
    if(e_map.current)
    {
      e_map.current.on('move', () =>{
        //@ts-ignore
        const { lng, lat } = e_map.current.getCenter();
        //@ts-ignore
        const zoom = e_map.current.getZoom();
        console.log('Current Coordinates:', { lng, lat });
        console.log('Current Zoom:',zoom)
    })}
  });

  return (
    <div className="parent_map_div">
      <div ref={mapContainer} id="map-container" className='map-cont'></div>
    </div>
  );
};

export default EuroMap;