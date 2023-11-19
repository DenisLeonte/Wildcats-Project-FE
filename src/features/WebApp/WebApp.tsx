import React from 'react'
import Popup from 'reactjs-popup'
import CityCostOfLivingPopup from '../../components/CostOfLivingPopup/CostOfLivingPopup';

const WebApp: React.FC = () => {
    return (
        <div>
            WebApp component
            <Popup trigger={<button>Test</button>} modal>
                <CityCostOfLivingPopup townName="Rome"/>
            </Popup>
        </div>
    );
}

export default WebApp;