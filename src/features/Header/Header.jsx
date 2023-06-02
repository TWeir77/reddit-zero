import React, { useState, useEffect } from 'react';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';

const Header = () => {


    return (
        <header>
            <div className='logo'>
                {/* reddit icon */}
                <p>
                    Reddit<span>Zero</span>
                </p>
            </div>
            <form className='search' onSubmit={onSearchTermSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTermLocal}
                    onChange={onSearchTermChange}
                    aria-label="Search posts"
                />
                <button
                    type='submit'
                    onClick={onSearchTermSubmit}
                    aria-label='Search'
                >
                    {/* search icon */}
                </button>
            </form>
        </header>
    )
}

export default Header;