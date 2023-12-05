import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { CameraOptions, FillLayout, FilterOptions, FlyToOptions, LngLatLike, Map } from 'mapbox-gl'
import '../../../styles/EuroMap.css'
import { log } from 'console';
import flyToData from './flyToData';
import fly from './flyToData';
import { map } from 'leaflet';
import CountryBox from '../CountryBox/CountryBox';

mapboxgl.accessToken = process.env!.REACT_APP_MAPBOX_LK!;

function EuroMap() {
  const mapContainer = useRef<HTMLDivElement |null>(null);
  const [showDiv,setShowDiv] = useState<boolean>(false);
  const [country,setCountry] = useState<string>("");
  let e_map = useRef<Map|null>(null);
  const mapCenter:LngLatLike = [10, 45]; // Center of Europe
  const southwest:LngLatLike = [-12,33];
  const northeast:LngLatLike = [30,70];
  const animatedWidth:number = 1200;
  const animationFrames:number=30;
  let selectedCountry:string="";

  useEffect(() =>{
    const enabled:string = process.env.REACT_APP_MAPBOX_ENABLED!;
    if(enabled === "true"){
      if(e_map.current) return;
      e_map.current = new mapboxgl.Map({
        container: 'map-container',
        style:process.env.REACT_APP_MAPBOX_STYLE,
        center: mapCenter,
        zoom:4.5,
        maxBounds:[southwest,northeast],
      });
      e_map.current.on('load',function(){
        e_map.current!.addSource('countries',{
          'type':'vector',
          'url': process.env.REACT_APP_MAPBOX_LAYER_URL
        });
        e_map.current!.addLayer(
          {
            id: 'country-boundaries',
            source:'countries',
            'source-layer': 'country_boundaries',
            type: 'fill',
            paint: {
              'fill-color': '#d2361e',
              'fill-opacity': 0.0,
            },
          },
          'country-label'
        );
        
        document.getElementsByClassName("mapboxgl-ctrl-attrib-inner")[0].remove();
        document.getElementsByClassName("mapboxgl-ctrl")[0].remove();
        e_map.current!.on('click','country-boundaries',function(e){
          let timer:any;
          getPosZoom(e);
          selectedCountry = e.features![0].properties!.name_en;
          setCountry(selectedCountry);
          let flyOpt = fly(selectedCountry);
          e_map.current!.easeTo(flyOpt as FlyToOptions);
          console.log(mapContainer.current!.offsetWidth,mapContainer.current!.offsetHeight);
          if(mapContainer.current!.offsetWidth - animatedWidth >= 50){
            
            document.getElementById("map-container")!.style.width = 'calc(100% - 450px - 2*7%)';
            document.getElementById("map-container")!.classList.add("reactive");
            resizeMap(parseInt(document.getElementById("map-container")!.style.width));
            timer = setTimeout(() => {
            setShowDiv(true);
              let timer1 = setTimeout(() => {
              (document.querySelector(".div-cont") as HTMLElement)!.style.width = `35%`;
              }, 50);
              return () => {clearTimeout(timer1);}
            }, 100);
          }
          return () => {clearTimeout(timer);}
        })
        
      })
      
    }
  });

  function getPosZoom(e:mapboxgl.MapMouseEvent & mapboxgl.EventData){
    const { lng, lat } = e_map.current!.getCenter();
    const zoom = e_map.current!.getZoom();
    let composed_string:string = "case '"+ e.features![0].properties!.name_en+"':\nlng="+lng+";\nlat="+lat+";\nzoom="+zoom+";\nbreak;";
    console.log(composed_string);
  }

  function resizeMap(newWidth: number) {
    if (e_map.current && mapContainer.current) {
      const startWidth = mapContainer.current.offsetWidth;
      const widthStep = (newWidth - startWidth) / animationFrames;
      let frame = 0;
  
      let animate = function() {
        if (frame < animationFrames) {
          mapContainer.current!.style.width = `${startWidth + widthStep * frame}px`;
          
          // Only call resize every 5 frames
          if (frame % 3 === 0) {
            e_map.current!.resize();
          }
      
          frame++;
          requestAnimationFrame(animate);
        } else {
          // Ensure resize is called one final time at the end of the animation
          e_map.current!.resize();
        }
      }
  
      animate();
    }
  }

  return (
    <div>
      <div className="parent_map_div">
        <div ref={mapContainer} id="map-container" className='map-cont'></div>
        {showDiv && <div className="div-cont"><CountryBox selectedCountry={country}/></div>}
      </div>
    </div>
  );
};

export default EuroMap;