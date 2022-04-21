import React from 'react';
import '../scss/PropertyDescription.scss'

const PropertyDescription = (props) => {
  return (
    <div className='property'>
      <div className='prize'>
        <div className='desc'>
          <h3>{props.name}</h3>
        </div>
        <div className='desc1'>
          <span className='price'><b> ${props.price}</b></span><br />
          <a href="#" className="btn btn-primary rounded-pill">Book Now </a>
        </div>
      </div>
      <div className='description'>
        <div className='image'>
          <img src={props.img1} alt='location' />
        </div>
        <div className='information'>
          <div className='location'>
            {/* <img src={props.img2} alt='location' /> */}
            <p>	 {props.address}</p>
            <hr />
          </div>
          <div className='review'>
            <div className='rating'>
              <span className="badge bg-success">9.1</span>
              <span className='text'>
                <b>Fabulous</b>
                <p>15 Reviews</p>
              </span>
            </div>
            <div className='customerreview'>
              <div className='customer'>
                <p>Beautiful place</p>
                <p id='date'>18th Jun, 2021</p>
                <hr />
              </div>
              <div className='customer'>
                <p>Amazing location and nearby the beach</p>
                <p id='date'>25th Dec, 2020</p>
                <hr />
              </div>
              <a href='#'>See all reviews</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDescription;
