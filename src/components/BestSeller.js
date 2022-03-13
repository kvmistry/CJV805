import React from 'react';
import '../scss/BestSeller.scss';
import { Link } from 'react-router-dom';

const BestSeller = (props) => {

  return (
    <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 card">
      <Link to={`/propertydescription/${props.name}`} className="btn btn-primary"><img src={props.img} className="card-img-top" alt="Bestseller" /></Link>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>  
      </div>
    </div>
  );
}

export default BestSeller;
