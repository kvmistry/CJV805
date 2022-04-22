import React from 'react';
import '../pageSCSS/PropertyListing.scss'
import FilteredItem from '../components/FilteredItem'
import Filter from '../components/Filter';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const PropertyListing = () => {
  let params = useParams();
  const[data,setData] = useState("")
  const [data1, setData1] = useState([  {id: "625ca0f1ac4e5248defdae18",
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
    fetch("http://localhost:5005/properties/"+params.variable).then(response => response.json()).then(json => {
      setData1(json);
    }).catch(err => {
      console.log(err);
    })

  }, [])

  return (
    <div>
      <header><Header setData={setData}/></header>
      <main>
        <div className='parent'>
          <Filter />
          <FilteredItem data={data1} />
        </div>
      </main>
      <footer><Footer /></footer>
    </div>
  );
}

export default PropertyListing;
