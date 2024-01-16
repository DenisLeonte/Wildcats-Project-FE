import React, { useContext, useEffect, useState } from 'react';
import '../../../styles/TravelPage.css';
import { DatePicker, Space } from 'antd';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import dayjs from 'dayjs';
import { set } from 'date-fns';
import { usePageContext } from '../../../contexts/PageContext/PageManager';
import { useQueryContext } from '../../../contexts/QueryContext/QueryContextManager';
import OfferBox from './OfferTravelPage';
import ComboBox from '../SearchResult/ComboBox';
import DualComboBox from '../SearchResult/DualComboBox';
import { ApiContext } from '../../../contexts/ApiContextProvider/ApiContextProvider'

const TravelPage: React.FC = () => {
    const context = useContext(ApiContext);
    const { Cities } = context;
    const { page, updatePage } = usePageContext();
    const { query, updateQuery } = useQueryContext();
    const { RangePicker } = DatePicker;
    const [passNo, setPassNo] = useState(1);
    const [originCity, setoriginCity] = useState("");
    const [destinationCity, setdestinationCity] = useState("");
    const [sDate, setSdate] = useState(dayjs());
    const [eDate, setEdate] = useState(dayjs());
    const [validInput, setValidInput] = useState(false);
    const [eDateSel, setEDateSel] = useState(false);
    const [sDateSel, setSDateSel] = useState(false);


    function setValue(value: number) {
        if (value >= 1) {
            setPassNo(value);
        }
    }

    const handleDateChange = (dates: any, dateStrings: any) => {
        if (dates.length == 2) {
            setSdate(dayjs(dates[0]));
            setEdate(dayjs(dates[1]));
            setEDateSel(true)
            setSDateSel(true);
        } else {
            setEDateSel(true)
            setSDateSel(true);
        }
    };

    function checkInputs() {
        if (originCity != "" && destinationCity != "" && originCity != destinationCity && eDateSel && sDateSel) {
            setValidInput(true);
        }
        else {
            setValidInput(false);
        }

    };

    function handleSearchClick() {
        if (validInput) {
            updateQuery({ from: originCity, to: destinationCity, startDate: sDate.toDate(), endDate: eDate.toDate(), adults: passNo });
            window.location.href = "/#searchresult"
            updatePage("searchRes");
        }
    };

    function handleoriginCityInput(e: any) {
        setoriginCity(e.target.value);
    };

    function handleDestInput(e: any) {
        setdestinationCity(e.target.value);
    };

    useEffect(() => {
        if (window.location.href.includes("#travel")) {
            window.location.href = "#travel";
        }
    }, []);

    useEffect(() => {
        checkInputs();
    }, [originCity, destinationCity, sDateSel, eDateSel, sDate, eDate]);

    return (
        <div className="travelPage">

            <div className="landing backgroundTravel">
                <Navbar />
                <div className="searchBar">
                    <DualComboBox optionsFirst={Cities.map((city) => { return city.name })} optionsSecond={Cities.map((city) => { return city.name })} />

                    <div className="calendar_pick">
                        <div className="searchBox" style={{ padding: "0px" }}>
                            <RangePicker bordered={false} onChange={handleDateChange} className={"datePicker"} />
                        </div>

                    </div>
                    <div className="searchBox passengerNum">
                        <div className="passengerPickContent">
                            <div className="passengerPickText">
                                <p className='boldText'>Passengers</p>
                                <p className='smallText'>{passNo} {passNo == 1 ? "adult" : "adults"}</p>
                            </div>
                            <div className="passengerPickIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                    <path d="M8.50016 4.67921C9.32183 4.67921 9.98766 5.34504 9.98766 6.16671C9.98766 6.98837 9.32183 7.65421 8.50016 7.65421C7.6785 7.65421 7.01266 6.98837 7.01266 6.16671C7.01266 5.34504 7.6785 4.67921 8.50016 4.67921ZM8.50016 11.0542C10.6039 11.0542 12.821 12.0884 12.821 12.5417V13.3209H4.17933V12.5417C4.17933 12.0884 6.39641 11.0542 8.50016 11.0542ZM8.50016 3.33337C6.93475 3.33337 5.66683 4.60129 5.66683 6.16671C5.66683 7.73212 6.93475 9.00004 8.50016 9.00004C10.0656 9.00004 11.3335 7.73212 11.3335 6.16671C11.3335 4.60129 10.0656 3.33337 8.50016 3.33337ZM8.50016 9.70837C6.60891 9.70837 2.8335 10.6575 2.8335 12.5417V14.6667H14.1668V12.5417C14.1668 10.6575 10.3914 9.70837 8.50016 9.70837Z" fill="#9D9D9D" />
                                </svg>
                            </div>
                            <div className="passengerArrows">
                                <button onClick={() => setValue(passNo + 1)} className="PassBut">+</button>
                                <button onClick={() => setValue(passNo - 1)} className="PassBut">-</button>
                            </div>
                        </div>
                    </div>
                    <div className="searchBox searchButt">
                        <button className={`searchButton ${!validInput ? 'disable_animation' : ''}`} onClick={handleSearchClick} disabled={!validInput}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className='searchIcon'>
                                <path d="M10.5033 9.50338H9.97659L9.78992 9.32338C10.4433 8.56338 10.8366 7.57671 10.8366 6.50338C10.8366 4.11004 8.89659 2.17004 6.50326 2.17004C4.10992 2.17004 2.16992 4.11004 2.16992 6.50338C2.16992 8.89671 4.10992 10.8367 6.50326 10.8367C7.57659 10.8367 8.56326 10.4434 9.32326 9.79004L9.50326 9.97671V10.5034L12.8366 13.83L13.8299 12.8367L10.5033 9.50338ZM6.50326 9.50338C4.84326 9.50338 3.50326 8.16338 3.50326 6.50338C3.50326 4.84338 4.84326 3.50338 6.50326 3.50338C8.16326 3.50338 9.50326 4.84338 9.50326 6.50338C9.50326 8.16338 8.16326 9.50338 6.50326 9.50338Z" fill="black" />
                            </svg>
                            <p>Search</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="offers offersbackground">
                <div className="offerWrapper">
                    <div className='offertext'><p>Cheap flight offers</p></div>
                    <div className="offerBoxWrapper">
                        <OfferBox cityName="MADRID" fromPlace='from Lisbon' price='€ 49.99' fromPrice='from' picture="1picture_offers.png"></OfferBox>
                        <OfferBox cityName="BERLIN" fromPlace='from Cluj' price='€ 56.99' fromPrice='from' picture="2picture_offers.png"></OfferBox>
                        <OfferBox cityName="PARIS" fromPlace='from London' price='€ 35.99' fromPrice='from' picture="3picture_offers.png"></OfferBox>
                        <OfferBox cityName="ROME" fromPlace='from Oslo' price='€ 69.99' fromPrice='from' picture="4picture_offers.png"></OfferBox>
                        <OfferBox cityName="MILANO" fromPlace='from Lyon' price='€ 25.99' fromPrice='from' picture="5picture_offers.png"></OfferBox>

                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default TravelPage;
