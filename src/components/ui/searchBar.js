import React, { Component } from 'react';

const SearchBar = (props) => {
    return (
        <div className="banner-serch-box">
            <input id="txtSearchBox" className="" name="q" value="" placeholder="Search for an event, venue or city" type="text" />
            <a href="javascript:void(0);" onClick="searchfor();">
                <i className="fa fa-search" aria-hidden="true"></i>
            </a>
        </div>

    );
}

export default SearchBar;
