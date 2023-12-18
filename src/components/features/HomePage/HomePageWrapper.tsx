import React, { useContext } from 'react';
import HomePage from './HomePage';
import { useGlobalContext } from '../../../PageManager';

const HomeComponentWrapper: React.FC = () => {
    const {page, updatePage} = useGlobalContext();

    return (
        <div>
            {page == "home" && <HomePage/>}
        </div>
    );
};

export default HomeComponentWrapper;
