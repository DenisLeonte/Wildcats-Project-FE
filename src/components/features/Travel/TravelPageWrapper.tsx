import React, { useContext } from 'react';
import TravelPage from './TravelPage';
import { useGlobalContext } from '../../../PageManager';

const TravelPageWrapper: React.FC = () => {
    const {page, updatePage} = useGlobalContext();

    return (
        <div>
            {page == "travel" && <TravelPage/>}
        </div>
    );
};

export default TravelPageWrapper;
