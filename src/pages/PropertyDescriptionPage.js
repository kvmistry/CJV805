import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyDescription from '../components/PropertyDescription'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const PropertyDescriptionPage = () => {
  let params = useParams();
  const[data,setData] = useState("")
  const [data1, setData1] = useState([{
    id: "",
    img: "",
    title: "",
    description: "",
    price: "",
    location: {
      streetAddress: "",
      city: "",
      state: "",
      country: "",
      zip: ""
    },
    type: "",
    rules: "",
    amenities: "",
    bestseller: true
  }])
  useEffect(() => {
    fetch("http://localhost:5005/property/title?title="+params.name).then(response => response.json()).then(json => {
      setData1(json);
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div>
      <header><Header setData={setData} /></header>
      <main><PropertyDescription name={data1[0].title} price={data1[0].price} amenities={data1[0].amenities} rules={data1[0].rules} key={data1[0].id} address={data1[0].location.streetAddress} img1={data1[0].img} /></main>
      <footer><Footer /></footer>

    </div>
  );
}

export default PropertyDescriptionPage;
