import React, { Component } from 'react';

const Dropdown = (props) => {
    return (
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {props.data.map(d => <li><a href="#">{d}</a></li>)}
        </ul> 
    );
}

export default Dropdown;
