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
  const [data, setData] = useState([{
    "id": 0,
    name: "",
    description: "",
    img: "",
    list: []
  }
  ])
  useEffect(() => {
    fetch("http://localhost:5000/property_list").then(response => response.json()).then(json => {
      let abc = json.filter((element) => element.id == parseInt(params.variable))
      setData(abc);
    }).catch(err => {
      console.log(err);
    })

  }, [])

  return (
    <div>
      <header><Header /></header>
      <main>
        <div className='parent'>
          <Filter />
          <FilteredItem data={data} />
        </div>
      </main>
      <footer><Footer /></footer>
    </div>
  );
}

export default PropertyListing;
