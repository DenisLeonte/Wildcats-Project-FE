import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import WebApp from './features/WebApp/WebApp';

//Asta e o magarie foarte mare, am furat definitia din codul sursa de la fullpage.js ca de altfel nu ma lasa but hey it works
type Credits = {
  enabled?: boolean,
  label?: string,
  position?: "left" | "right"
}


function App(){
  const anchors = ["page1","page2","page3"];
  const creds:Credits = {
    enabled:true,
    label:"made possible by fullPage.js",
    position:"right"
  }
  return (
    <div className="app">
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        licenseKey={process.env.REACT_APP_FULLPAGE_LK}
        scrollingSpeed={1000}
        scrollOverflow={true}
        credits={creds}
        gplv3-license={true}
        parallax={true}
        dragAndMove={true}
        autoScrolling={true}
        render={({state}) =>{
          return(
            <ReactFullpage.Wrapper>
              <div className="section">
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
              <div className="section"> <WebApp/></div>
            </ReactFullpage.Wrapper>
          )
        }}
        ></ReactFullpage>
    </div>
  );
}

export default App;
