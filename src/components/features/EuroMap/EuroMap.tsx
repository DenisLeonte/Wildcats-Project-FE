
import React, { useEffect, useRef } from 'react';
import mapboxgl, { CameraOptions, FillLayout, FlyToOptions, LngLatLike, Map } from 'mapbox-gl'
import '../../../styles/EuroMap.css'
import { log } from 'console';
import flyToData from './flyToData';
import fly from './flyToData';

mapboxgl.accessToken = process.env!.REACT_APP_MAPBOX_LK!;

function EuroMap() {
  const mapContainer = useRef<HTMLDivElement |null>(null);
  let e_map = useRef<Map|null>(null);
  const mapCenter:LngLatLike = [10, 45]; // Center of Europe
  const southwest:LngLatLike = [-12,33];
  const northeast:LngLatLike = [30,70];
  let selectedCountry:string=""

  useEffect(() =>{
    const enabled:string = process.env.REACT_APP_MAPBOX_ENABLED!;
    if(enabled === "true"){
      if(e_map.current) return;
      e_map.current = new mapboxgl.Map({
        container: 'map-container',
        style:'mapbox://styles/denis9365/clpbqkah6008t01p9fxj21p0u',
        center: mapCenter,
        zoom:4.5,
        maxBounds:[southwest,northeast],
      });
      e_map.current.on('load',function(){
        e_map.current!.addSource('countries',{
          'type':'vector',
          'url': 'mapbox://mapbox.country-boundaries-v1'
        });
        e_map.current!.addLayer(
          {
            id: 'country-boundaries',
            source: {
              type: 'vector',
              url: 'mapbox://mapbox.country-boundaries-v1',
            },
            'source-layer': 'country_boundaries',
            type: 'fill',
            paint: {
              'fill-color': '#d2361e',
              'fill-opacity': 0.0,
            },
          },
          'country-label'
        );

        e_map.current!.on('click','country-boundaries',function(e){
          
          const { lng, lat } = e_map.current!.getCenter();
          const zoom = e_map.current!.getZoom();
          let composed_string:string = "case '"+ e.features![0].properties!.name_en+"':\nlng="+lng+";\nlat="+lat+";\nzoom="+zoom+";\nbreak;";
          // console.log(composed_string);
          selectedCountry = e.features![0].properties!.name_en;
          let flyOpt = fly(selectedCountry);
          e_map.current!.easeTo(flyOpt as FlyToOptions);
        })
        
      })
      
    }
    // DEV PURPOSES ONLY, JUST TO GET COORDS
    // if(e_map.current)
    // {
    //   e_map.current.on('move', () =>{
    //     //@ts-ignore
    //     const { lng, lat } = e_map.current.getCenter();
    //     //@ts-ignore
    //     const zoom = e_map.current.getZoom();
    //     console.log('Current Coordinates:', { lng, lat });
    //     console.log('Current Zoom:',zoom)
    // })}
  });

  return (
    <div>
      <div className="parent_map_div">
        <div ref={mapContainer} id="map-container" className='map-cont'></div>
      </div>
    </div>
  );
};

export default EuroMap;