import React from 'react';
import '../scss/Resort.scss'

const Resort = (props) => {
  return (
    <div>
      <div className="card">
        <div className='row'>
          <div className='col-4'>
            <img className="card-img" src={props.element.img} alt="Image" height={200} width={300} />
          </div>
          <div className='col-4'>
            <div className="card-body">
              <div className='name'>
                <h5 className="card-title">{props.element.name}</h5><p>{props.element.address}</p>
              </div>
              <div className='rating'>
                <span className="badge bg-success">{props.element.rating}</span>
                <span><b>Fabulous</b></span>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='goto'>
              <span className='price'><b>$ {props.element.price}</b></span>
              <p className='text-success'>Free cancellation</p>
              <a href="#" className="btn btn-primary rounded-pill">Book Now </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resort;
