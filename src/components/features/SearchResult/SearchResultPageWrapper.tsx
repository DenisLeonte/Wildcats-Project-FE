import React from 'react';
import { usePageContext } from "../../../contexts/PageContext/PageManager";
import { SearchResultPage } from './SearchResultPage';

const SearchResultPageWrapper: React.FC = () => {
    const {page,updatePage} = usePageContext();
    return(
        <div>
            {page == "searchRes" && <SearchResultPage/>}
        </div>
    );
}

export default SearchResultPageWrapper