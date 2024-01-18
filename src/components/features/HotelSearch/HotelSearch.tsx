import Navbar from "../Navbar/Navbar";
import "../../../styles/HotelSearch.css";
import { useEffect, useState } from "react";
import { DatePicker, Space } from 'antd';
import dayjs from "dayjs";
import HotelBox from "./HotelData";

export const HotelSearch:React.FC = () =>{

    const { RangePicker } = DatePicker;
    const [sDate, setSdate] = useState(dayjs());
    const [eDate, setEdate] = useState(dayjs());
    const [eDateSel, setEDateSel] = useState(false);
    const [sDateSel, setSDateSel] = useState(false);

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
                <RangePicker bordered={true} onChange={handleDateChange} className={"datePicker"}/>
            </div>
            <div className="hotelResultList"><div className="resultsFound"> Found 40 properties </div>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Excelent" reviewNumber="140 reviews" score="9,5" price="300€"></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Excelent" reviewNumber="140 reviews" score="9,5" price="300€"></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Excelent" reviewNumber="140 reviews" score="9,5" price="300€"></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Excelent" reviewNumber="140 reviews" score="9,5" price="300€"></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Excelent" reviewNumber="140 reviews" score="9,5" price="300€"></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Excelent" reviewNumber="140 reviews" score="9,5" price="300€"></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Excelent" reviewNumber="140 reviews" score="9,5" price="300€"></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Excelent" reviewNumber="140 reviews" score="9,5" price="300€"></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Excelent" reviewNumber="140 reviews" score="9,5" price="300€"></HotelBox>
                <HotelBox  hotelName="Ibis Hotel" reviewName="Excelent" reviewNumber="140 reviews" score="9,5" price="300€"></HotelBox>
            </div>
        </div>
    );
}

export default HotelSearch