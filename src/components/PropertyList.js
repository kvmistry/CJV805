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


  const [list, setList] = useState([{
    "id": 0,
    "name": "",
    "description": "",
    "img":"",
    "list": []
  }])
  let count = 0;
  let row = 0;

  useEffect(() => {
    fetch("http://localhost:5000/property_list").then(response => response.json()).then(json => {
      setList(json)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  console.log("list", list);
  row = _rowCount(list);
  return (
    <div className='property'>
      <h3>Properties you may like ...</h3>
      {(
        () => {
          let count = 0;
          let x = [];
          for (let i = 0; i < row; i++) {
            x.push(<div className='row row-sm-3 g-2'>
              {list.slice(count, count + 4).map((element) => {
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
