import React, { useEffect } from 'react';

export const SearchResultPage: React.FC = () => {

    useEffect(() => {
        window.location.href = "/#searchresult";
    },[]);

    return(
        <div>
            SEARCH RESULT PAGE
        </div>
    )
}