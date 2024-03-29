import React from 'react';
import '../../../styles/Result.css';
import { getFlightDetails } from '../../../apiUtils/FetchHelper';
import { Popup } from 'reactjs-popup';
const AIRLINE_LOGO_URL = 'http://pics.avs.io/';

type ResultProps = {
    takeOffHour: string;
    landingHour: string;
    takeOffLocation: string;
    landingLocation: string;
    price: number;
    airline: string;
    errorText?: string;
    stops: number;
    stopoverAirports?: string[];
    takeOffDate?: string;
    landingDate?: string;
    dayOffset?: number;
    url: number;
    search_id: string;
};

const Result: React.FC<ResultProps> = ({ takeOffHour, landingHour, takeOffLocation, landingLocation, price, airline, errorText, stops, stopoverAirports, takeOffDate, landingDate, dayOffset, url, search_id }) => {
    const images = require.context('../../../../assets/airlines', true);
    const [isRedirecting, setIsRedirecting] = React.useState(false);

    const renderStopsInfo = () => {
        const stopoverLabel = [takeOffLocation, ...stopoverAirports!].join(' -> ');
        return (
            <>
                <div className="stopsLabel">
                    {stops > 0 ?
                        <p className="stopsTxt">Stops: {stops}</p>
                        :
                        <p className="stopsTxt">Direct</p>
                    }
                </div>
                {stopoverLabel && (
                    <div className="stopoverAirports">
                        <p className="stopsTxt">Via</p>
                        <p className="stopsVia">{stopoverLabel}</p>
                    </div>
                )}
            </>
        );
    };

    const redirectToAgency = async (url: number, search_id: string) => {
        setIsRedirecting(true);

        const data = await getFlightDetails(search_id, url);
        console.log(data);
        if (data) {

            window.open(data.url);
        }
        setIsRedirecting(false);
    }

    const handleOnClick = (url: number, search_id: string) => {
        redirectToAgency(url, search_id);
    }

    return (
        <div>
            {(airline != '') ?
                <><div className="result">
                    <Popup open={isRedirecting} modal closeOnDocumentClick={false} className="custom-popup">
                        <h1>Redirecting...</h1>
                    </Popup>
                    <div>
                        <img src={AIRLINE_LOGO_URL + '80/80/' + airline + '.png'} alt={airline} className="airlineLogo" width={80} />
                    </div>
                    <div className="travelVisual">
                        <div className="takeOffH">
                            <p className="hourFont">{takeOffHour}</p>
                            <p className="destFont">{takeOffLocation}</p>
                        </div>
                        <div className="arrowVisual">
                            <svg width="86" height="3" viewBox="0 0 86 3" fill="none" xmlns="http://www.w3.org/2000/svg" className={"arrowStart"}>
                                <line x1="0.5625" y1="1.2218" x2="85.5625" y2="1.2218" stroke="black" stroke-width="2" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className={"plane"}>
                                <path d="M2.83236 19.215H21.8324V21.215H2.83236V19.215ZM22.4024 9.85503C22.1924 9.05503 21.3624 8.57503 20.5624 8.79503L15.2524 10.215L8.35236 3.78503L6.42236 4.29503L10.5624 11.465L5.59236 12.795L3.62236 11.255L2.17236 11.645L4.76236 16.135L21.3324 11.705C22.1424 11.475 22.6124 10.655 22.4024 9.85503Z" fill="black" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="16" viewBox="0 0 86 16" fill="none" className='arrowEnd'>
                                <path d="M85.3232 8.92891C85.7137 8.53838 85.7137 7.90522 85.3232 7.51469L78.9592 1.15073C78.5687 0.76021 77.9355 0.76021 77.545 1.15073C77.1545 1.54126 77.1545 2.17442 77.545 2.56495L83.2018 8.2218L77.545 13.8787C77.1545 14.2692 77.1545 14.9023 77.545 15.2929C77.9355 15.6834 78.5687 15.6834 78.9592 15.2929L85.3232 8.92891ZM0.5625 9.2218H84.6161V7.2218H0.5625V9.2218Z" fill="black" />
                            </svg>
                        </div>
                        <div className="landingH">
                            <p className="hourFont">{landingHour} {(dayOffset && dayOffset != 0) ? (" +" + dayOffset) : ''}</p>
                            <p className="destFont" style={{ textAlign: "left" }}>{landingLocation}</p>
                        </div>
                    </div>
                    {renderStopsInfo()}
                    <div className="priceBut">
                            <p className={"priceTxt"}>€{price}</p>
                            <button onClick={() => handleOnClick(url, search_id)} className="selectBut"><p>select</p></button>
                    </div>
                </div>
                </>
                :
                <p className='priceTxt'>{errorText}</p>
            }
        </div>
    );
};

export default Result;
