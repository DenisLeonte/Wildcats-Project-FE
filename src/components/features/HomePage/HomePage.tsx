import React, { useEffect } from 'react';
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';
import "../../../styles/HomePage.css";
import EuroMap from '../EuroMap/EuroMap';
import Navbar from '../Navbar/Navbar';
import { useAuth } from '../../../contexts/AuthContext/AuthProvider';

type Credits = {
  enabled?: boolean,
  label?: string,
  position?: "left" | "right"
}

function HomePage(){
  
  const anchors = ["landing","map","page3"];
  const interval = 5000;
  const geoUrl = "../assets/features.json"
  var g_interval:NodeJS.Timer;
  var fullpageAPI:fullpageApi;
  const creds:Credits = {
    enabled:true,
    label:"made possible by fullPage.js",
    position:"right"
  }

  useEffect(() => {
    document.getElementsByClassName("fp-watermark")[0].remove();
    window.location.href="#home";
  },[]);

  return (
    <div className="app">
      <Navbar></Navbar>
      <ReactFullpage
        licenseKey={process.env.REACT_APP_FULLPAGE_LK}
        navigation
        navigationTooltips={anchors}
        scrollingSpeed={1000}
        scrollOverflow={true}
        credits={creds}
        gplv3-license={true}
        cards={true}
        dragAndMove={true}
        autoScrolling={true}
        keyboardScrolling={true}
        normalScrollElements='.parent_map_div'
        controlArrows={false}
        slidesNavigation
        afterLoad={function(origin, destination, direction){
          //responsible for the "auto slide" feature
          clearInterval(g_interval);
          const lapse = interval;
          if(destination.item.querySelectorAll('.fp-slides').length){
            g_interval = setInterval(function(){
              fullpageAPI.moveSlideRight();
            },lapse)
          }
        }}
        render={({state,fullpageApi}) =>{
          fullpageAPI=fullpageApi
          return(
            <ReactFullpage.Wrapper>
              <div className="section landing">
                <div className="slide background slide1 title_font">
                  <div className="title1">The journey not only broadens the mind but enriches the soul.</div>
                </div>
                <div className="slide background slide2 title_font">
                  <div className="title2">Travel is the only thing you can buy that makes you richer</div>
                </div>
                <div className="slide background slide3 title_font">
                  <div className="title3">The more you travel,<br/> the more you realize how much there is to see.</div>
                </div>
                <div className="slide background slide4 title_font">
                  <div className="title4">Go where you feel most alive.</div>
                </div>
                <div className="slide background slide5 title_font">
                  <div className="title5">Every corner of the world<br/> holds a story waiting to be discovered</div>
                </div>
              </div>
              <div className="section map_bg">
                <EuroMap/>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
        ></ReactFullpage>
    </div>
  );
}

export default HomePage;
