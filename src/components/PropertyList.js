import React from 'react';
import Property from './Property';
import '../scss/PropertyList.scss';
import { useState, useEffect } from 'react';

const _rowCount = (variable) => {
  let j = 3
  let count = 1;
  for (let i = 0; i < variable.length - 1; i++) {
    if (j == i) {
      j += 4;
      count++;
    }
  }
  return count;
}

const PropertyList = () => {
  const [data, setData] = useState([  {id: "625ca0f1ac4e5248defdae18",
  img: "hotel1.jpg",
  title: "Hotel Marriott",
  description: "3 star hotel",
  price: "$300",
  location: {
      streetAddress: "1 Dufferin St",
      city: "Toronto",
      state: "Ontario",
      country: "Canada",
      zip: "L2R1T9"
  },
  type: "hotel",
  rules: "Pets allowed, Smoking allowed in smoking room only",
  amenities: "Wifi, Mini Bar,In house Laundary, Buffet",
  bestseller: true
      } ])
  let count = 0;
  let row = 0;

  useEffect(() => {
    fetch("http://localhost:5005/properties/bestseller?bestseller=true").then(response => response.json()).then(json => {
    
      setData(json);
    }).catch(err => {
      console.log(err);
    })
  }, [])
  row = _rowCount(data);
  return (
    <div className='property'>
      <h3>Properties you may like ...</h3>
      {(
        () => {
          let count = 0;
          let x = [];
          for (let i = 0; i < row; i++) {
            x.push(<div className='row row-sm-3 g-2'>
              {data.slice(count, count + 4).map((element) => {
                return (
                  <Property key={count++} id={element.id} img={element.img} name={element.name} description={element.description} list={element.list} />
                )
              })
              }
            </div>)
            count = count + 4;
          }
          return x;
        }
      )()
      }
    </div>
  );
}

export default PropertyList;
