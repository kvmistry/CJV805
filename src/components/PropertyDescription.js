import React from 'react';
import '../scss/PropertyDescription.scss'

const PropertyDescription = (props) => {
  return (
    <div className='property'>
      <div className='prize'>
        <div className='desc'>
          <h3>{props.name}</h3>
        </div>        
      </div>
      <div className='description'>
        <div className='image'>
          <img src={props.img1} alt='location' />
        </div>
        <div className='information'>
          <div className='location'>
            {/* <img src={props.img2} alt='location' /> */}
            <p>Address : {props.address}</p>
            <p>Amenities : {props.amenities}</p>
            <p>Rules : {props.rules}</p>
            <hr  style={{"height":"2px","border-width":"0","color":"gray","background-color":"gray"}}/>
          </div>
          <div className='review'>
            <div className='rating'>              
                <p><b>Reviews :</b></p>
            </div>
            <div className='customerreview'>
              <div className='customer'>
                <p>Beautiful place</p>
                <p id='date'>18th Jun, 2021</p>
                <hr  style={{"height":"2px","border-width":"0","color":"gray","background-color":"gray"}}/>
              </div>
              <div className='customer'>
                <p>Amazing location and nearby the beach</p>
                <p id='date'>25th Dec, 2020</p>
                <hr style={{"height":"2px","border-width":"0","color":"gray","background-color":"gray"}}/>
              </div>
            </div>
            <div className='desc1'>
          <span className='price'><b>Price : {props.price}</b></span><br />
          <a href="#" className="btn btn-primary rounded-pill">Book Now </a>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDescription;
