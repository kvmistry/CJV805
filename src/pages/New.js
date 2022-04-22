import React from 'react';
import Newuser from '../components/NewUser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

const New = () => {
  const[data,setData] = useState("")
  return (
    <div>
        <Header setData={setData} />
        <Newuser/>
        <Footer/>
    </div>
  )
}

export default New;