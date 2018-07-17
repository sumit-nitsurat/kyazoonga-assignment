import React from 'react';
import Dropdown from '../ui/dropdown';
import SubMenu from '../home/sub-menu';

const dropdownData = ['Action', 'Another Action', 'Something Else', 'Seperate Link'];

const Header = () => {
    return (
        <nav className="navbar navbar-inverse site-nav">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="site-logo" href="#"><img src="images/kyazoonga.png" alt="The Big Ticket" title="The Big Ticket" /></a>
            </div>
            <div className="collapse navbar-collapse navbar-right " id="myNavbar">
                <ul className="nav navbar-nav top-nav hide-on-mobile">
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i><span className="badge">4</span></a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-bell" aria-hidden="true"></i><span className="badge">10</span></a>
                        <Dropdown data={dropdownData}/>
                    </li>
                    <li><a href="#"><span className="label label-primary">Ticket Your Event</span></a></li>
                </ul>
                <ul className="nav navbar-nav top-nav hide-on-desktop">
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i><span className="badge">4</span></a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-bell" aria-hidden="true"></i><span className="badge">10</span></a>
                        <Dropdown data={dropdownData} />
                    </li>
                    <li><a href="#"><span className="label label-primary">Ticket Your Event</span></a></li>
                    <SubMenu />
                </ul>
            </div>
        </nav>
    )
}

export default Header;