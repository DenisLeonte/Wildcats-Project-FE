import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import WebApp from './features/WebApp/WebApp';

function App(){
  const anchors = ["page1","page2","page3"];
  const creds = {
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
        // JUST FOR DEV I WILL FIX ASAP
        //@ts-ignore
        credits={creds}
        render={({state}) =>{
          return(
            <ReactFullpage.Wrapper>
              <div className="section background_image1">

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
