import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "../../../styles/SearchResultPage.css";
import { addDays, subDays } from 'date-fns';
import { useQueryContext } from '../../../contexts/QueryContext/QueryContextManager';
import Result from '../Result/Result';
import { getFlights } from '../../../apiUtils/FetchHelper';
import { FlightResonseStatus, FlightResponse, FlightResponseError } from '../../../types/FlightResponse';
import { format, utcToZonedTime } from 'date-fns-tz';

const fetchingDataEmptyArrayPlaceholder = Array(10).fill(null);

const InitialResultState: FlightResponse[] | FlightResponseError[] = [];

function countDaysBetweenDates(dateStr1: string, dateStr2: string): number {
    const date1 = new Date(dateStr1);
    const date2 = new Date(dateStr2);
    console.log(date1);
    console.log(date2);
    // Calculate the difference in milliseconds
    const differenceInTime = Math.abs(date2.getTime() - date1.getTime());

    // Convert the difference from milliseconds to days
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    console.log(differenceInDays);
    return differenceInDays;
}



export const SearchResultPage: React.FC = () => {
    const images = require.context('../../../../assets/', true);
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const { query, updateQuery } = useQueryContext();
    const formattedFromDate = format(fromDate, 'EEE.,d MMM');
    const formattedToDate = format(toDate, 'EEE.,d MMM');
    const [dataReceived, setDataReceived] = useState(false);
    const [flights, setFlights] = useState(InitialResultState);
    const [searchStatus, setSearchStatus] = useState(FlightResonseStatus.NOT_SET);
    const [search_id, setSearch_id] = useState("");
    const [convertedCurrency, setConvertedCurrency] = useState(0);

    

    const increaseFromDay = () => {
        if (fromDate.getTime() < toDate.getTime())
            setFromDate(prevDate => addDays(prevDate, 1));
    }

    const decreaseFromDay = () => {
        setFromDate(prevDate => subDays(prevDate, 1));
    }

    const increaseToDay = () => {
        setToDate(prevDate => addDays(prevDate, 1));
    }

    const decreaseToDay = () => {
        if (toDate.getTime() > fromDate.getTime())
            setToDate(prevDate => subDays(prevDate, 1));
    }

    useEffect(() => {
        if (!window.location.href.includes("#searchresult")) {
            window.location.href = "/#searchresult";
        };

        setFromDate(new Date(query.startDate));
        setToDate(new Date(query.endDate));
        const fetchData = async () => {
            try {
                const data = await getFlights(query);
                console.log(data);
                if (!data.error) {
                    setSearch_id(data.search_id);
                    setFlights(data.proposals);
                    setSearchStatus(FlightResonseStatus.SUCCESS);
                } else {
                    setSearchStatus(FlightResonseStatus.ERROR);
                }
            } catch (error) {
                setSearchStatus(FlightResonseStatus.ERROR);
            } finally {
                setDataReceived(true); 
            }
        };
        if(searchStatus === FlightResonseStatus.NOT_SET)
            fetchData();
    }, [searchStatus]);
    if(!dataReceived) return <div><h1>Loading...</h1></div>;
    return (
        <div className="searchResPage srBackground">
            <Navbar />
            <div className="srSearchBox">
                <div className="absSearchBox">
                    <div style={{ height: "100%", position: "relative", width: "" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="searchLogo">
                            <rect width="24" height="24" rx="6" fill="#004006" />
                            <path d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z" fill="white" />
                        </svg>
                    </div>
                    <div className="tripView srSearchBoxComp">
                        <p className="destOriginTXT"><b>{query.from.name} - {query.to.name}</b></p>
                        <p className='passNumber'>&nbsp;<b>{query.adults}</b> adult{query.adults > 1 ? "s" : ""}</p>
                    </div>
                    <div className="startDateSelector srSearchBoxComp">
                        <button className="arrowBut" onClick={decreaseFromDay}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 26 24" fill="none">
                                <path d="M15.6043 7L10.396 12L15.6043 17V7Z" fill="#004006" />
                            </svg>
                        </button>
                        <div className="dateBoxSR">
                            <p>{formattedFromDate}</p>
                        </div>
                        <button className="arrowBut" onClick={increaseFromDay}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M10 17L15 12L10 7V17Z" fill="#004006" />
                            </svg>
                        </button>
                    </div>
                    <div className="endDateSelector srSearchSelector">
                        <button className="arrowBut" onClick={decreaseToDay}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 26 24" fill="none">
                                <path d="M15.6043 7L10.396 12L15.6043 17V7Z" fill="#004006" />
                            </svg>
                        </button>
                        <div className="dateBoxSR">
                            <p>{formattedToDate}</p>
                        </div>
                        <button className="arrowBut" onClick={increaseToDay}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M10 17L15 12L10 7V17Z" fill="#004006" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <img src={images("./ad_space_horizontal.jpg")} alt="" className="adSpaceHorizontal" />
            <div className="resultList">
                <div className="resultList">
                    {(() => {
                        switch (searchStatus) {
                            case FlightResonseStatus.NOT_SET:
                                return fetchingDataEmptyArrayPlaceholder.map((_, index) => (<Result url ={0} search_id='' takeOffHour='' landingHour='' takeOffLocation='' landingLocation='' airline='' price={0} stops ={0} errorText='Loading flights...'/>))
                            case FlightResonseStatus.ERROR:
                                return flights.map((flight) => (<Result url ={0} search_id='' takeOffHour='' landingHour='' takeOffLocation='' landingLocation='' airline='' price={0} errorText={(flight as FlightResponseError).error} stops ={0}/>));
                            case FlightResonseStatus.SUCCESS:
                                
                                return flights.map((flight) => (
                                    <Result takeOffHour={(flight as FlightResponse).local_start_time} landingHour={(flight as FlightResponse).local_end_time}
                                        takeOffLocation={(flight as FlightResponse).origin_airport} landingLocation={((flight as FlightResponse).destination_airport)}
                                        airline={(flight as FlightResponse).airline} price={(flight as FlightResponse).price} stops = {(flight as FlightResponse).no_stops} 
                                        stopoverAirports={(flight as FlightResponse).stops_airports} dayOffset={countDaysBetweenDates((flight as FlightResponse).departure_date, (flight as FlightResponse).arrival_date)}
                                        url = {(flight as FlightResponse).url} search_id={search_id} />
                                ));
                            default:
                                return <></>;
                        }
                    })()}
                    {/* <Result takeOffHour='00:00' landingHour='00:00' takeOffLocation='ROMA' landingLocation='ROMA' price={100} airline="Wizz" stops={0} url={1} search_id='ok'/> */}
                </div>


                {!dataReceived ? fetchingDataEmptyArrayPlaceholder.map((_, index) => (
                    <Result takeOffHour='' landingHour='' takeOffLocation='' landingLocation='' airline='' price={0} stops ={0} url ={0} search_id='' />))
                    :
                    <></>}
            </div>
            <img src={images("./ad_space_horizontal.jpg")} alt="" className="adSpaceHorizontal" style={{marginLeft:0}}/>
        </div>
    )
}