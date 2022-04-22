import React from 'react'
import Logo from '../assets/img/logo.jpeg'
import "../scss/Header.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import SetCookies from '../cookies/SetCookies';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Header = ({ setData }) => {
  const params = useParams()
  const navigate = useNavigate();
  const [temp, setTemp] = useState(false)
  useEffect(() => {
    if (SetCookies.get('login')) {
      setTemp(true)
    } else {
      setTemp(false)
    }
  }, [])
  const logOut = (event) => {
    event.preventDefault();
    SetCookies.remove('login');
    setTemp(false)
    navigate('/');
  }

  const [data, setData1] = useState("")
  const handleClick = () => {
    fetch(`http://localhost:5005/properties/${data}`).then(response => response.json()).then(json => {
      setData(json)
      navigate(`/propertytypepage/${data}`);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    (temp) ? (
      <div className='header'>
        <Link to="/"><img classname="logo" src={Logo} alt='Logo' /></Link>
        <div className='search'>
          <input className='search-bar' type="search" placeholder="Search" onChange={(e) => { setData1(e.target.value) }} />
          <button className='searchbtn' onClick={handleClick}><SearchIcon /></button>
        </div>
        <div className='header-right'>
          <p><Link to="/propertytypepage">Vacation properties</Link></p>
          <div className="dropdown">
            <button className='dropdownbtn' onClick={logOut}>Logout<AccountCircleIcon /></button>
            <div className="dropdown-content">
              <Link to="/dashboard">Dashboard</Link>
            </div>
          </div>
        </div>
      </div>) : (
      <div className='header'>
        <Link to="/"><img classname="logo" src={Logo} alt='Logo' /></Link>
        <div className='search'>
          <div className='search'>
            <input className='search-bar' type="search" placeholder="Search" onChange={(e) => { setData1(e.target.value) }} />
            <button className='searchbtn' onClick={handleClick}><SearchIcon /></button>
          </div>
        </div>
        <div className='header-right'>
          <p><Link to="/propertytypepage">Vacation properties</Link></p>
          <div className="dropdown">
            <button className='dropdownbtn'>Login/Sign Up<AccountCircleIcon /></button>
            <div className="dropdown-content">
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Header;