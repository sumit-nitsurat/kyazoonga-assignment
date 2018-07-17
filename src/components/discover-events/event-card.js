import React, { Component } from 'react';
import SocialIcon from '../ui/social-icon';

const EventCard = () => {
    return (
        <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
            <a href="#" className="block-link">
                <div className="ticket-img">
                <img src="http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif" alt=""/>
                <span className="ticket-price">INR 50 - 2,500</span>
                </div>
                <div className="ticket-info">
                <span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
                <h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
                <p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
                </div>
            </a>
            <div className="social clearfix">
                <div className="pull-left">
                <a className="btn btn-default btn-xs ical" href="#">
                <i className="fa fa-calendar"></i> &nbsp;iCal</a>
                <a className="btn btn-default btn-xs ml-10" href="#">
                <i className="fa fa-calendar"></i> &nbsp;Google</a>
                </div>
                <div className="pull-right">
                    <SocialIcon iconClass="fa fa-facebook"/>
                    <SocialIcon iconClass="fa fa-twitter"/>
                    <SocialIcon iconClass="fa fa-twitter"/>
                    <SocialIcon iconClass="fa fa-linkedin"/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default EventCard;
