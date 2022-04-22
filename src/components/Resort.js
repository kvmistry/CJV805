import React from 'react';
import '../scss/Resort.scss'
import { Link } from 'react-router-dom';

const Resort = (props) => {
  return (
    <div className='resort'>
      <div className="card">
        <div className='row'>
          <div className='col-4'>
            <img className="card-img" src={props.element.img} alt="Image" height={200} width={300} />
          </div>
          <div className='col-4'>
            <div className="card-body">
              <div className='name'>
                <h3 className="card-title">{props.element.title}</h3><p>Location : {props.element.location.streetAddress}</p>
                <p>Amenities : {props.element.amenities}</p>
                <p>Rules : {props.element.rules}</p>
              </div>
              <div className='rating'>                
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='goto'>
              <span className='price'><b>{props.element.price}</b></span>
              <p className='text-success'>Free cancellation</p>
              <Link to={`/propertydescription/${props.element.title}`} className="btn btn-primary rounded-pill"><b>Book Now </b></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resort;
