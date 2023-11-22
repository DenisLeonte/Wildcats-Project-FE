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
