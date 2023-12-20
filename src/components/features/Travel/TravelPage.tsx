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
    const [passNo,setPassNo] = useState(1);

    function setValue(value:number){
        if(value >= 1){
            setPassNo(value);
        }
    }

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
            <div className="landing backgroundTravel">
                <div className="searchBar">
                    <div className="searchBox originDest">
                        <div className="origin">
                            <input type="text" placeholder="Origin" className="origin_input"/>
                        </div>
                        <div className="dest">
                            <input type="text" placeholder="Destination" className="origin_input"/>
                        </div>
                    </div>
                    <div className="calendar_pick">
                        <div className="searchBox" style={{padding:"0px"}}>
                            <RangePicker bordered={false}/>
                        </div>
                        
                    </div>
                    <div className="searchBox passengerNum"> 
                        <div className="passengerPickContent">
                            <div className="passengerPickText">
                                <p className='boldText'>Passengers</p>
                                <p className='smallText'>{passNo} {passNo == 1?"adult":"adults"}</p>
                            </div>
                            <div className="passengerPickIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                    <path d="M8.50016 4.67921C9.32183 4.67921 9.98766 5.34504 9.98766 6.16671C9.98766 6.98837 9.32183 7.65421 8.50016 7.65421C7.6785 7.65421 7.01266 6.98837 7.01266 6.16671C7.01266 5.34504 7.6785 4.67921 8.50016 4.67921ZM8.50016 11.0542C10.6039 11.0542 12.821 12.0884 12.821 12.5417V13.3209H4.17933V12.5417C4.17933 12.0884 6.39641 11.0542 8.50016 11.0542ZM8.50016 3.33337C6.93475 3.33337 5.66683 4.60129 5.66683 6.16671C5.66683 7.73212 6.93475 9.00004 8.50016 9.00004C10.0656 9.00004 11.3335 7.73212 11.3335 6.16671C11.3335 4.60129 10.0656 3.33337 8.50016 3.33337ZM8.50016 9.70837C6.60891 9.70837 2.8335 10.6575 2.8335 12.5417V14.6667H14.1668V12.5417C14.1668 10.6575 10.3914 9.70837 8.50016 9.70837Z" fill="#9D9D9D"/>
                                </svg>
                            </div>
                            <div className="passengerArrows">
                                <button onClick={() => setValue(passNo + 1)} className="PassBut">+</button>
                                <button onClick={() => setValue(passNo - 1)} className="PassBut">-</button>
                            </div>
                        </div>
                    </div>
                    <div className="searchBox searchButt">
                        <button className="searchButton">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className='searchIcon'>
                                <path d="M10.5033 9.50338H9.97659L9.78992 9.32338C10.4433 8.56338 10.8366 7.57671 10.8366 6.50338C10.8366 4.11004 8.89659 2.17004 6.50326 2.17004C4.10992 2.17004 2.16992 4.11004 2.16992 6.50338C2.16992 8.89671 4.10992 10.8367 6.50326 10.8367C7.57659 10.8367 8.56326 10.4434 9.32326 9.79004L9.50326 9.97671V10.5034L12.8366 13.83L13.8299 12.8367L10.5033 9.50338ZM6.50326 9.50338C4.84326 9.50338 3.50326 8.16338 3.50326 6.50338C3.50326 4.84338 4.84326 3.50338 6.50326 3.50338C8.16326 3.50338 9.50326 4.84338 9.50326 6.50338C9.50326 8.16338 8.16326 9.50338 6.50326 9.50338Z" fill="#9D9D9D"/>
                            </svg>
                            <p>Search</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="offers">
                <div className="offerWrapper">
                    <p style ={{margin:0}}>OFFERS PAGE</p>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default TravelPage;
