import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { H4, SortWrapper } from '../StyledComponents';

const SortDate = ({ onSort }) => {

    const [sortDateType, setSortDateType] = useState('relevance');

    const sort = () => {
        const sortType = sortDateType === 'relevance' ? 'newest' : sortDateType === 'newest' ? 'oldest' : 'newest'; 
        setSortDateType(sortType);
        onSort(sortType);
    }

    return (
        <SortWrapper onClick={sort}>
            <H4>{sortDateType}</H4>&nbsp;
            <Icon 
                name={
                    sortDateType === 'relevance' ? 
                    'sort' : 
                    sortDateType === 'newest' ? 
                    'sort up' : 
                    'sort descending'} 
                size='large' />
        </SortWrapper>
    )
}

export default SortDate;