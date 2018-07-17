import React, {Component} from 'react';
import DiscoverEvents from '../discover-events';
import BrowseEvents from '../browse-events';
import SocialLinks from '../social';
import FeaturedIn from '../featured';
import SearchBar from '../ui/searchBar';

class SubMenu extends Component {
    render() {
      return (
        <React.Fragment>
            <li><a href="#">Concerts</a></li>
            <li><a href="#" className="blue-bg">Cricket</a></li>
            <li><a href="#" className="orange-bg">Events</a></li>
            <li><a href="#" className="green-bg">Sports</a></li>
            <li><a href="#" className="pink-lt-bg">Amusement Parks</a></li>
            <li><a href="#" className="purple-bg">Restaurants</a></li>
            <li><a href="#" className="yellow-bg">Theatre & Arts</a></li>
            <li><a href="#">Parties</a></li>
        </React.Fragment>
    )
    }
}

export default SubMenu;