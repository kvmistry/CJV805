import React from 'react';
import '../scss/Filter.scss';
import img1 from '../assets/img/property1.jpg'

const Filter = () => {
    return (
        <div className='filter borber'>
            <div className='others'>
                <div className='form'>
                    <h4>Property Name</h4>
                    <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                </div>
                <div className='filter1'>
                    <h4>Popular Filter</h4>
                    <ul >
                        <li>
                            <label>
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                pool
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                Breakfast Included
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                WiFi Included
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                Parking
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                Airport Transfers
                            </label>
                        </li>
                    </ul>
                </div>
                <div className='filter2'>
                    <h4>Price Sorting</h4>
                    <ul>
                        <li>
                            <label>
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                Lowest to Highest
                            </label>
                        </li>
                        <li>
                            <label>
                                <input className="form-check-input me-1" type="checkbox" value="" />
                                Highest to Lowest
                            </label>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Filter;
