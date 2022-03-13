import React from 'react';
import "../scss/Footer.scss";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className='footer bg-light'>
                <div className='row'>
                    <div className='col'>
                        <h3>About Me</h3>
                        Name: Kashyap Vinaykumar Mistry<br/>
                            Student ID: 111027215<br/>
                            Course: Database Connection with Java (CJV805)<br/><br/>
                    </div>
                    <div className='col icons'>
                        <a href="#"><FaFacebook size='2rem' /></a>
                        <a href="#"><FaTwitterSquare size='2rem' /></a>
                        <a href="#"><FaSnapchat size='2rem' /></a>
                        <a href="#"><FaInstagram size='2rem' /></a>
                        <p className="copyright">Rest Inn © 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;