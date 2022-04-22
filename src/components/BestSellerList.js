import React from 'react';
import BestSeller from './BestSeller';
import '../scss/BestSellerList.scss'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const _rowCount = (variable) => {
  let j = 3
  let count = 1;
  for (let i = 0; i < variable.length - 1; i++) {
    if (j === i) {
      j += 4;
      count++;
    }
  }
  return count;
}

const BestSellerList = () => {
  const [data, setData] = useState([{
    id: "625ca0f1ac4e5248defdae18",
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
  }])
  useEffect(() => {
    fetch("http://localhost:5005/properties/bestseller?bestseller=true").then(response => response.json()).then(json => {
      console.log('qqqqqqqqqqqqqqqqqqqqqqqq', json);
      setData(json);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  let count = 0;
  let row = _rowCount(data);
  return (
    <div className='property1'>
      <h2>Some of the Best Selling Properties ...</h2>
      {(
        () => {
          let count = 0;
          let x = [];
          for (let i = 0; i < row; i++) {
            x.push(<div className='row'>
              {data.slice(count, count + 4).map((element) => {
                return (
                  <BestSeller img={element.img} name={element.title} id={element.id} key={element.id} />
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

export default BestSellerList;
