import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "../../../styles/SearchResultPage.css";
import { addDays, format, subDays } from 'date-fns';
import { useQueryContext } from '../../../contexts/QueryContext/QueryContextManager';
import Result from '../Result/Result';
import ComboBox from './ComboBox';

export const SearchResultPage: React.FC = () => {
    const images = require.context('../../../../assets/', true);
    const [fromDate,setFromDate] = useState(new Date());
    const [toDate,setToDate] = useState(new Date());
    const {query, updateQuery} = useQueryContext();
    const formattedFromDate = format(fromDate, 'EEE.,d MMM');
    const formattedToDate = format(toDate, 'EEE.,d MMM');


    const increaseFromDay = () => {
        if(fromDate.getTime() < toDate.getTime())
            setFromDate(prevDate => addDays(prevDate,1));
    }

    const decreaseFromDay = () =>{
        setFromDate(prevDate => subDays(prevDate,1));
    }

    const increaseToDay = () => {
        setToDate(prevDate => addDays(prevDate,1));
    }

    const decreaseToDay = () =>{
        if(toDate.getTime() > fromDate.getTime())
            setToDate(prevDate => subDays(prevDate,1));
    }

    useEffect(() => {
        if(!window.location.href.includes("#searchresult")){
            window.location.href = "/#searchresult";
        };
        setFromDate(new Date(query.startDate));
        setToDate(new Date(query.endDate));

        
    },[]);

    return(
        <div className="searchResPage srBackground">
            <Navbar/>
            <div className="srSearchBox">
                <div className="absSearchBox">
                    <div style={{height:"100%",position:"relative",width:""}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="searchLogo">
                            <rect width="24" height="24" rx="6" fill="#004006"/>
                            <path d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="tripView srSearchBoxComp">
                        <p className="destOriginTXT"><b>{query.from} - {query.to}</b></p>
                        <p className='passNumber'>&nbsp;<b>{query.adults}</b> adult{query.adults > 1 ?"s":""}</p>  
                    </div>
                    <div className="startDateSelector srSearchBoxComp">
                        <button className="arrowBut" onClick={decreaseFromDay}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 26 24" fill="none">
                                <path d="M15.6043 7L10.396 12L15.6043 17V7Z" fill="#004006"/>
                            </svg>
                        </button>
                        <div className="dateBoxSR">
                            <p>{formattedFromDate}</p>
                        </div>
                        <button className="arrowBut" onClick={increaseFromDay}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M10 17L15 12L10 7V17Z" fill="#004006"/>
                            </svg>
                        </button>
                    </div>
                    <div className="endDateSelector srSearchSelector">
                        <button className="arrowBut" onClick={decreaseToDay}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 26 24" fill="none">
                                <path d="M15.6043 7L10.396 12L15.6043 17V7Z" fill="#004006"/>
                            </svg>
                        </button>
                        <div className="dateBoxSR">
                            <p>{formattedToDate}</p>
                        </div>
                        <button className="arrowBut" onClick={increaseToDay}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M10 17L15 12L10 7V17Z" fill="#004006"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <img src={images("./ad_space_horizontal.jpg")} alt="" className="adSpaceHorizontal" />
            <div className="resultList">
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
                <Result takeOffHour='20:10' landingHour='23:10' takeOffLocation='CLJ' landingLocation='BER' price={80} airline='wizz'/>
            </div>
        </div>
    )
}