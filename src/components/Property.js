import React from 'react';
import '../scss/Property.scss'
import { Link } from 'react-router-dom';

const Property = (props) => {
  // let temp = props.list

  return (

    <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 c2">
      <Link to={`/property-sorting/${props.type}`} className="btn btn-primary"><img src={props.img} className="card-img-top" alt="property" /></Link>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Property;
