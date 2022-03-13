import React from 'react'
import { Link } from 'react-router-dom'

import "../scss/NewUser.scss"
const NewUser = () => {
  return (
    <div className="newuser">
            <form className="register-form" action="">
                <h3>Register</h3>
                <div className="form-control">
                    <label className="form-label" htmlFor="firstName">First Name</label><br />
                    <input type="text" id="firstName" className="form-input"/>
                </div>
                <br />
                <div className="form-control">
                    <label className="form-label" htmlFor="lastName">Last Name</label><br />
                    <input type="text" id="lastName" className="form-input"/>
                </div>
                <br />
                <div className="form-control">
                    <label className="form-label" htmlFor="email">Email</label><br />
                    <input type="email" id="email" className="form-input"/>
                </div>
                <br />
                <div className="form-control">
                    <label className="form-label" htmlFor="password">Password</label><br />
                    <input type="password" id="password" className="form-input"/>
                </div>
                <br />
                <div className="form-control">
                    <label className="form-label" htmlFor="cpassword">Confirm Password</label><br />
                    <input type="password" id="password" className="form-input"/>
                </div>

                <br />
                <div className="form-control">
                    <button className="btn" type="submit">Create Account</button>
                </div>
                <div className='form-control'>
                    Already have an account? <Link to="/login">Sign In</Link>
                    </div>
            </form>

        </div>
  )
}

export default NewUser