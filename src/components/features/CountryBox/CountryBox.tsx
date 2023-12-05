import React from 'react';
import '../../../styles/CountryBox.css';

interface CountryBoxProps {
    selectedCountry: string;
}

function CountryBox({ selectedCountry }: CountryBoxProps) {
    return (
        <div className='box'>
            <div className="innerBox">
                <button className='button1'>{selectedCountry}</button>
                <button className='button2'>Travel to {selectedCountry}
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className='svg_plane'>
                    <g clipPath="url(#clip0_41_1197)">
                        <path d="M29.5633 35.351L31.2057 33.4662L27.0183 21.5277L31.5348 16.3443C32.2164 15.5621 32.072 14.3255 31.2116 13.5758C30.3512 12.826 29.1064 12.8522 28.4248 13.6344L23.9083 18.8177L11.5091 16.3034L9.86671 18.1883L20.213 23.0586L15.6965 28.242L12.3914 27.849L11.1596 29.2626L15.6091 31.4818L18.4162 35.5857L19.648 34.1721L18.8065 30.9519L23.323 25.7685L29.5633 35.351Z" fill="#004006"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_41_1197">
                            <rect width="33" height="30" fill="white" transform="translate(20.4141 0.851318) rotate(41.0674)"/>
                        </clipPath>
                    </defs>
                </svg>
                </button>
                <button className='button3'>Cost of living for <br/>{selectedCountry}
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none" className='svg_plane'>
                    <path d="M27.3 12.25V5.625H23.1V8.875L17.5 4.375L3.5 15.625H7.7V25.625H16.1V18.125H18.9V25.625H27.3V15.625H31.5L27.3 12.25ZM24.5 23.125H21.7V15.625H13.3V23.125H10.5V13.3625L17.5 7.7375L24.5 13.3625V23.125Z" fill="#004006"/>
                    <path d="M14.7 13.125H20.3C20.3 11.75 19.04 10.625 17.5 10.625C15.96 10.625 14.7 11.75 14.7 13.125Z" fill="#004006"/>
                </svg>
                </button>
            </div>
        </div>
    );
}

export default CountryBox;
