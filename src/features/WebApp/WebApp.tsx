import React from 'react'
import Popup from 'reactjs-popup'
import CityCostOfLivingPopup from '../../components/COFDetailsCityPopup/COFDetails';

const WebApp: React.FC = () => {
    return (
        <div>
            WebApp component
            <Popup trigger={<button>Test</button>} modal>
                <CityCostOfLivingPopup></CityCostOfLivingPopup>
            </Popup>
        </div>
    );
}

export default WebApp;