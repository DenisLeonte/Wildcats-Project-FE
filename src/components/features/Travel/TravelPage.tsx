import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';
import React, { useEffect, useState } from 'react';
import '../../../styles/TravelPage.css';
import { DatePicker, Space } from 'antd';
import Footer from '../Footer/Footer';


type Credits = {
    enabled?: boolean,
    label?: string,
    position?: "left" | "right"
  }

const TravelPage: React.FC = () => {
    const anchors = ["travel","offers"];
    var fullpageAPI:fullpageApi;
    const creds:Credits = {
        enabled:true,
        label:"made possible by fullPage.js",
        position:"right"
      }
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }
    const { RangePicker } = DatePicker;



    useEffect(() => {
        try{
        document.getElementsByClassName("fp-watermark")[0].remove();
        }catch(e){
            console.log(e);
        }
      },[]);

    function handleDateSelect(ranges:any){
        console.log(ranges);
    }

    return (
        <div className="travelPage">
            <ReactFullpage
                anchors={anchors}
                licenseKey={process.env.REACT_APP_FULLPAGE_LK}
                navigation
                navigationTooltips={anchors}
                scrollingSpeed={1000}
                credits={creds}
                gplv3-license={true}
                dragAndMove={true}
                keyboardScrolling={true}
                render={({state, fullpageApi}) => {
                    fullpageAPI=fullpageApi
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section landing backgroundTravel">
                                <div className="searchBar">
                                    <div className="searchBox originDest">
                                        <div className="origin">
                                            <input type="text" placeholder="Origin" className="origin_input"/>
                                        </div>
                                        <div className="dest">
                                            <input type="text" placeholder="Destination" className="origin_input"/>
                                        </div>
                                    </div>
                                    <div className="searchBox calendar_pick">
                                        <RangePicker/>
                                    </div>
                                </div>
                            </div>
                            <div className="section offers ">
                                <p>OFFERS PAGE</p>
                                <div className="footerTravel">
                                    <Footer></Footer>
                                    
    
                            
                                    
                                </div>
                                
                                
                                
                            </div>

                            
                        </ReactFullpage.Wrapper>
                        
                    )
                }}
            ></ReactFullpage>

        </div>
    );
};

export default TravelPage;
