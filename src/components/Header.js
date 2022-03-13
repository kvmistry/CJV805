import React from 'react'
import Logo from '../assets/img/logo.jpeg'
import "../scss/Header.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/"><img classname="logo" src={Logo} alt='Logo' /></Link>
            <div className='search'>
                <input className='search-bar' type="search" placeholder="Search" />
                <button className='searchbtn'><SearchIcon /></button>
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
}

export default Header;