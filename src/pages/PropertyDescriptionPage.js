import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyDescription from '../components/PropertyDescription'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const PropertyDescriptionPage = () => {
  let params = useParams();
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
    fetch("http://localhost:5005/properties/" + params.name).then(response => response.json()).then(json => {

      setData(json);
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div>
      <header><Header /></header>
      <main><PropertyDescription name={data[0].title} price={data[0].price} key={data[0].id} address={data[0].location.streetAddress} img1={data[0].img} /></main>
      <footer><Footer /></footer>

    </div>
  );
}

export default PropertyDescriptionPage;
