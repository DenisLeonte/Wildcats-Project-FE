import React, { useContext } from 'react';
import { PageManager } from '../../../PageManager';
import HomePage from './HomePage';

const HomeComponentWrapper: React.FC = () => {
    const {page,setPage} = useContext(PageManager);

    return (
        <div>
            {page == "home" && <HomePage/>}
        </div>
    );
};

export default HomeComponentWrapper;
