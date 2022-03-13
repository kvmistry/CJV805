import React from 'react';
import Filter from '../components/Filter';
import Resort from '../components/Resort'
import '../pageSCSS/PropertyTypePage.scss'
import { useState, useEffect } from 'react';
import AllItems from '../components/AllItems';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const PropertyTypePage = () => {
  let a = [];
  let count = 0;
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
      json.forEach(element => {
        element.list.forEach(e1 => {
          a.push(e1);
        });
      });
      setData(a);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div>
      <Header />
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
        {
          data.map((element1) => {
            return (
              <AllItems element={element1} key={element1.id} />
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default PropertyTypePage;
