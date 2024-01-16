import React from 'react';
import CityComboBox from './CityComboBox';
import '../../../styles/DualComboBox.css'; // Import the CSS file for styling
import { City } from '../../../types/City';

interface DualComboBoxProps {
    optionsFirst: City[];
    optionsSecond: City[];
}

const DualCityComboBox: React.FC<DualComboBoxProps> = ({optionsFirst, optionsSecond}) => {
    return (
        <div className="searchBox originDest">
            <div className='origin'>
                <div className='origin_input'>
                    <CityComboBox options={optionsFirst} placeholder="Origin" />
                </div>
            </div>
            <div className='dest'>

                <div className='origin_input'>
                    <CityComboBox options={optionsSecond} placeholder="Destination" />
                </div>
            </div>
        </div>
    );
};

export default DualCityComboBox;
