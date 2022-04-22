import React from 'react';
// import { Link } from 'react-router-dom';
import SetCookies from '../reducer/SetCookies';
import { useLocation } from 'react-router-dom';
import "../scss/UserDashboard.scss"

const UserDashboard = () => {
    const location = useLocation();
    console.log('bbbbbbb', location.state);
    return (
        <div className='dashboard'>
            <div className='user'>
                <div className='h3'>
                    <h2>Hello {SetCookies.get('login').name},</h2>
                </div>
                <div className='details'>
                    <form className="row1">
                        <div className="row-info">
                            <label htmlFor="inputname" className="label">Name : </label>
                            <input type="text" className="field" id="inputname" placeholder={SetCookies.get('login').name} readOnly />
                        </div>
                        <div className="row-info">
                            <label htmlFor="inputAddress" className="label">E-mail :</label>
                            <input type="e-mail" className="field" id="inputAddress" placeholder={SetCookies.get('login').email} readOnly />
                        </div>
                        <div className="row-info">
                            <label htmlFor="inputAddress2" className="label">Address :</label>
                            <input type="text" className="field" id="inputAddress2" placeholder={SetCookies.get('login').address} readOnly />
                        </div>
                    </form><br/><br/>
                    <div>
                        <h2>Your previous booking...</h2>
                        <p>You have no previous records</p><br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;