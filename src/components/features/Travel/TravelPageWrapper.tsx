import React, { useContext } from 'react';
import { PageManager } from '../../../PageManager';
import HomePage from './TravelPage';
import TravelPage from './TravelPage';

const TravelPageWrapper: React.FC = () => {
    const {page,setPage} = useContext(PageManager);

    return (
        <div>
            {page == "travel" && <TravelPage/>}
        </div>
    );
};

export default TravelPageWrapper;
