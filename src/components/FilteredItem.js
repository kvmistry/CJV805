import React from 'react';
import '../scss/FilteredItem.scss'
import Resort from './Resort';

const FilteredItem = (props) => {
    console.log("props",props);
    return (
        <div className='filtered'>
            <div className='sort '>
                <h3>Properties</h3>
                <div className='sortby'>
                    <p className='para'><b>Sort by</b></p>
                    <div className='dropdown'><button className="btn btn-secondary" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" >Featured</button></div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Star Rating                            
                        </button>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Distance                            
                        </button>
                    </div>
                    <div className='dropdown'>  <button className="btn btn-secondary " type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" >Guest Rating</button></div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Price                           
                        </button>
                    </div>
                </div>
            </div>
            <div className='result'>
                {props.data?.map((element, key) => (
                    <div key={key}>
                        <Resort element={element}/>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default FilteredItem;
