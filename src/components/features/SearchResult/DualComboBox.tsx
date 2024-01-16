import React from 'react';
import ComboBox from './ComboBox';
import '../../../styles/DualComboBox.css'; // Import the CSS file for styling

interface DualComboBoxProps {
    optionsFirst: string[];
    optionsSecond: string[];
}

const DualComboBox: React.FC<DualComboBoxProps> = ({optionsFirst, optionsSecond}) => {
    return (
        <div className="searchBox originDest">
            <div className='origin'>
                <div className='origin_input'>
                    <ComboBox options={optionsFirst} placeholder="Origin" />
                </div>
            </div>
            <div className='dest'>

                <div className='origin_input'>
                    <ComboBox options={optionsSecond} placeholder="Destination" />
                </div>
            </div>
        </div>
    );
};

export default DualComboBox;
