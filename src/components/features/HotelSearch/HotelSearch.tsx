import Navbar from "../Navbar/Navbar";
import "../../../styles/HotelSearch.css";
import { useEffect, useState } from "react";
import { DatePicker, Space } from 'antd';
import dayjs from "dayjs";
import HotelBox from "./HotelBox";

export const HotelSearch:React.FC = () =>{

    const { RangePicker } = DatePicker;
    const [sDate, setSdate] = useState(dayjs());
    const [eDate, setEdate] = useState(dayjs());
    const [eDateSel, setEDateSel] = useState(false);
    const [sDateSel, setSDateSel] = useState(false);
    const [passNo, setPassNo] = useState(1);

    function setValue(value:number){
        if(value >= 1){
            setPassNo(value);
        }
    }

    const handleDateChange = (dates:any, dateStrings:any) => {
        if(dates.length == 2){
            setSdate(dayjs(dates[0]));
            setEdate(dayjs(dates[1]));
            setEDateSel(true)
            setSDateSel(true);
        }else{
            setEDateSel(true)
            setSDateSel(true);
        }
        };

    useEffect(() => {
        if(!window.location.href.includes("#hotelsearch")){
            window.location.href = "/#hotelsearch";
        };
    },[])

    return(
        <div className="hotelSearchPage hsBackground">
            <Navbar/>
            <div className="hotelSearchSelectors">
                <RangePicker onChange={handleDateChange} className={"datePicker"}/>

                <div className="VladBox">
                    VLAD BOX
                </div>
                <div className="searchBox passengerNum hotelBox"> 
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
                    <div>
                        <button className = "hotelSearchBut">
                            <p>
                                Search
                            </p> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M12 4.5L10.59 5.91L16.17 11.5H4V13.5H16.17L10.59 19.09L12 20.5L20 12.5L12 4.5Z" fill="white"/>
                            </svg>  
                    </button>
                </div>
            </div>
            <div className="hotelResultList"><div className="resultsFound"> Found 40 properties </div>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Exceptional" reviewNumber="140 reviews" score="9,5" price="300€" duration="3 nights" numberAdults="adulti" bookButton="Book now" ></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Exceptional" reviewNumber="140 reviews" score="9,5" price="300€" duration="3 nights" numberAdults="adulti" bookButton="Book now" ></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Exceptional" reviewNumber="140 reviews" score="9,5" price="300€" duration="3 nights" numberAdults="adulti" bookButton="Book now" ></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Exceptional" reviewNumber="140 reviews" score="9,5" price="300€" duration="3 nights" numberAdults="adulti" bookButton="Book now" ></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Exceptional" reviewNumber="140 reviews" score="9,5" price="300€" duration="3 nights" numberAdults="adulti" bookButton="Book now" ></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Exceptional" reviewNumber="140 reviews" score="9,5" price="300€" duration="3 nights" numberAdults="adulti" bookButton="Book now" ></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Exceptional" reviewNumber="140 reviews" score="9,5" price="300€" duration="3 nights" numberAdults="adulti" bookButton="Book now" ></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Exceptional" reviewNumber="140 reviews" score="9,5" price="300€" duration="3 nights" numberAdults="adulti" bookButton="Book now" ></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Exceptional" reviewNumber="140 reviews" score="9,5" price="300€" duration="3 nights" numberAdults="adulti" bookButton="Book now" ></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Exceptional" reviewNumber="140 reviews" score="9,5" price="300€" duration="3 nights" numberAdults="adulti" bookButton="Book now" ></HotelBox>
            </div>
        </div>
    );
}

export default HotelSearch