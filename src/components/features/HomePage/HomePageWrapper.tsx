import React, { useContext } from 'react';
import HomePage from './HomePage';
import { usePageContext } from "../../../contexts/PageContext/PageManager";

const HomeComponentWrapper: React.FC = () => {
    const {page, updatePage} = usePageContext();

    return (
        <div>
            {page == "home" && <HomePage/>}
        </div>
    );
};

export default HomeComponentWrapper;
