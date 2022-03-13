import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Register from '../components/RegisterUser.js';

const RegisterUser = () => {
  return (
    <div className='RegisterUser'>
        <Header/>
        <Register/>
        <Footer/>
        </div>
  )
}

export default RegisterUser;