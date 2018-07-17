import React, {Component} from 'react';
import DiscoverEvents from '../discover-events';
import BrowseEvents from '../browse-events';
import SocialLinks from '../social';
import FeaturedIn from '../featured';
import SearchBar from '../ui/searchBar';
import SubMenu from './sub-menu';

const carousalData = ['slide 1', 'slide 2', 'slide 3', 'slide 4', 'slide 5']
class Home extends Component {
    render() {
      return (
        <React.Fragment>
            <div id="myCarousel" className="carousel slide carousel-fade home-slider" data-ride="carousel">
                <h1>Tickets made simple for everyone, everywhere</h1>
                <div className="site-manu container">
                    <div className="collapse navbar-collapse hide-on-mobile">
                        <ul className="nav navbar-nav sub-main-nav">
                            <SubMenu />
                        </ul>
                    </div>
                    <SearchBar />
                </div>
                <div className="carousel-inner">
                    {this.createCarousalSlider(carousalData)}
                </div>

            </div>
            <DiscoverEvents />
            <BrowseEvents />
            <SocialLinks />
            <FeaturedIn />
        </React.Fragment>
    )
    }

    createCarousalSlider(carousalData) {
        return carousalData.map((carousal, idx) => { 
            let cls = idx === 0 ? 'item active' : 'item';
            return (<div key={idx} data-slide={idx} className={cls}>
            <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" className="hide-on-mobile" />
            <div className="hide-on-desktop">
                <video title="4" id="bgvid4" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                    <source src="https://content.kyazoonga.com/videos/video8.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
            </div>
        </div>)}
        )
    }
}

export default Home;