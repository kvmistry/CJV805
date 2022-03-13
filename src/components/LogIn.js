import React from 'react'
import "../scss/Login.scss"
const LogIn = () => {
    return (
        <div className='loginform'>
            <form className='logindetails'>
                <h3>LOGIN</h3>
                <p>Please login to your account</p>

                <div className="form-outline mb-4">
                <label className="form-label" for="form2Example11">Username</label><br/>
                <input type="email" id="form2Example11" className="form-control" placeholder="Username" />                    
                <br/><br/>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form2Example22">Password</label><br/>
                <input type="password" id="form2Example22" className="form-control" placeholder='Password' />                    
                <br/><br/>
                </div>

                <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log in</button><br/>
                    <a className="text-muted" href="#!">Forgot password?</a>
                </div>
                <br/>
                <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-danger">Create new</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn