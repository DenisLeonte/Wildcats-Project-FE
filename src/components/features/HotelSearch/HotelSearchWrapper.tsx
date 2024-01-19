import React from 'react';
import { usePageContext } from "../../../contexts/PageContext/PageManager";
import { HotelSearch } from './HotelSearch';

const HotelSearchWrapper: React.FC = () => {
    const {page,updatePage} = usePageContext();
    return(
        <div>
            {page == "searchHotels" && <HotelSearch/>}
        </div>
    );
}

export default HotelSearchWrapper