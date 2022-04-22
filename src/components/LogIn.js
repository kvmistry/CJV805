import React from 'react'
import "../scss/Login.scss"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SetCookies from '../cookies/SetCookies'
import { Link } from 'react-router-dom'
const LogIn = () => {
    const navigate = useNavigate()
    const [email, setUser] = useState()
    const [login, setLogin] = useState(true)
    const [password, setPassword] = useState()
    const handleClick = () => {

        let result = { email, password }
        fetch("http://localhost:5005/customer/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(result)
        }).then(response => {
            if (response.status !== 200) {
                setLogin(false)
            }
            else {
                response.json().then((json) => {
                    SetCookies.set("login", json, { path: "/" })
                    console.log('wwwwwwwwwww', SetCookies.get('login'));
                    navigate('/');
                })
            }
        }
        )
    }

    return (
        <div className='loginform'>
            <div className='logindetails'>
                <h3>LOGIN</h3>
                <p>Please login to your account    "</p>

                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example11">Username</label><br />
                    <input type="email" id="form2Example11" className="form-control" placeholder="Username" onChange={(e) => { setUser(e.target.value) }} />
                    <br /><br />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example22">Password</label><br />
                    <input type="password" id="form2Example22" className="form-control" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                    <br /><br />
                </div>

                <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={handleClick}>Log in</button><br />
                    <a className="text-muted" href="#!">Forgot password?</a>
                </div>
                <br />
                <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <Link to="/signup"><button type="button" className="btn btn-outline-danger">Create new</button></Link>
                </div>
            </div>
        </div>
    )
}

export default LogIn