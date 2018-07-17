import React, { Component } from 'react';
import  Categories from './catergories';

const categories = [{name: 'Concerts', image: 'concerts-cat1'}, 
  {name: 'Cericket', image: 'cricket-cat1'}, 
  {name: 'Theater & Arts', image: 'theatre-cat'},
  {name: 'Amusement Parks', image: 'amusementparks-cat'}, 
  {name: 'Sports', image: 'sports-cat'},
  {name: 'Restaurents', image: 'restaurants-cat'}];
const BrowseEvents = () => {
    return (
        <section className="home-cat-sec text-center">
        <div className="container">
          <h2 className="site-title">Browse by top categories</h2>
          <div className="row">
             {categories.map((cat, idx) => <Categories key={idx} data={cat} />)}
          </div>
        </div>
      </section>
    );
}

export default BrowseEvents;
