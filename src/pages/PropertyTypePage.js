import React from 'react';
import Filter from '../components/Filter';
import Resort from '../components/Resort'
import '../pageSCSS/PropertyTypePage.scss'
import { useState, useEffect } from 'react';
import AllItems from '../components/AllItems';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useParams } from 'react-router-dom';

const PropertyTypePage = () => {
  const params = useParams()
  let a = [];
  let count = 0;
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
  useEffect(() => {
    let url = (params.data)?"http://localhost:5005/properties/"+params.data:"http://localhost:5005/properties"
    fetch(url).then(response => response.json()).then(json => {
    
      setData(json);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div>
      <Header setData={setData} />
      <div className='parent'>
        <Filter />
        <div className='container'>
          {
            data.map((element1) => {
              return (
                <Resort element={element1} key={count++} />
              );
            })
          }
        </div>
        {/* {
          data.map((element1) => {
            return (
              <AllItems element={element1} key={element1.id} />
            )
          })
        } */}
      </div>
      <Footer />
    </div>
  );
}

export default PropertyTypePage;
