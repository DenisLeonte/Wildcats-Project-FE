import React, { useContext } from 'react';
import TravelPage from './TravelPage';
import { usePageContext } from "../../../contexts/PageContext/PageManager";

const TravelPageWrapper: React.FC = () => {
    const {page, updatePage} = usePageContext();

    return (
        <div>
            {page == "travel" && <TravelPage/>}
        </div>
    );
};

export default TravelPageWrapper;
