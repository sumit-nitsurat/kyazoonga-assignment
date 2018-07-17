import React, { Component } from 'react';

const Categories = (props) => {
    return (
        <div className="col-sm-4 cat-box">
            <a href="#" className="block-link">
            <div className="cat-txt">
                <h3>{props.data.name}</h3>
            </div>
            <img src={"https://static2.kyazoonga.com/Images/kzconsumer/top-categories/"+ props.data.image + ".jpg"} alt="" className="img-full-width"/>
            </a>
        </div>
    );
}

export default Categories;
