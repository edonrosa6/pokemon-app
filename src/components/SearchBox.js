import React from 'react';

export const SearchBox = ({placeholder, handleChange}) =>(
    <div className="searchBox">
        <input 
            className='search'
            type='search' 
            placeholder={placeholder} 
            onChange={handleChange}
        />
    </div>

);