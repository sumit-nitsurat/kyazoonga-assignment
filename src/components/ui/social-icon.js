import React, { Component } from 'react';

const SocialIcon = (props) => {
    return (
        <React.Fragment>
            <a className="btn btn-default btn-xs btn-circle" href="#">
            <i className={props.iconClass}></i></a>
        </React.Fragment>
    );
}

export default SocialIcon;
