import React from 'react';
import CityComboBox from './CityComboBox';
import '../../../styles/DualComboBox.css'; // Import the CSS file for styling
import { City } from '../../../types/City';

interface DualComboBoxProps {
    optionsFirst: City[];
    optionsSecond: City[];
    optionsFirstOnChange?: (value: City) => void;
    optionsSecondOnChange?: (value: City) => void;
}

const DualCityComboBox: React.FC<DualComboBoxProps> = ({optionsFirst, optionsSecond, optionsFirstOnChange, optionsSecondOnChange}) => {
    return (
        <div className="searchBox originDest">
            <div className='origin'>
                <div className='origin_input'>
                    <CityComboBox options={optionsFirst} onCityChange={optionsFirstOnChange} placeholder="Origin" />
                </div>
            </div>
            <div className='dest'>

                <div className='origin_input'>
                    <CityComboBox options={optionsSecond} onCityChange = {optionsSecondOnChange} placeholder="Destination" />
                </div>
            </div>
        </div>
    );
};

export default DualCityComboBox;
