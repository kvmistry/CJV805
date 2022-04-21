import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import "../scss/NewUser.scss"
const NewUser = () => {
    const navigate = useNavigate()
    const [name,setName]=useState("")
    const [email,setUser]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")
    const handleClick = ()=>{
        let result = {name,address,email,password}
        fetch("http://localhost:5005/customer/registration",{
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
              }, 
              body: JSON.stringify(result)
        }).then((response)=>{
            if(response.status==200){
                
                navigate('/login')
            }else{
                console.log('aaaaaaaa----------',response.status);
            }
        })
    }
  return (
    <div className="newuser">
            <div className="register-form" action="">
                <h3>Register</h3>
                <div className="form-control">
                    <label className="form-label" htmlFor="firstName">Name</label><br />
                    <input type="text" id="firstName" className="form-input" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <br />
                <div className="form-control">
                    <label className="form-label" htmlFor="lastName">Address</label><br />
                    <input type="text" id="lastName" className="form-input" onChange={(e)=>{setAddress(e.target.value)}}/>
                </div>
                <br />
                <div className="form-control">
                    <label className="form-label" htmlFor="email">Email</label><br />
                    <input type="email" id="email" className="form-input"onChange={(e)=>{setUser(e.target.value)}}/>
                </div>
                <br />
                <div className="form-control">
                    <label className="form-label" htmlFor="password">Password</label><br />
                    <input type="password" id="password" className="form-input" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <br />
                <div className="form-control">
                    <label className="form-label" htmlFor="cpassword">Confirm Password</label><br />
                    <input type="password" id="password" className="form-input"/>
                </div>

                <br />
                <div className="form-control">
                    <button className="btn" type="submit" onClick={handleClick}>Create Account</button>
                </div>
                <div className='form-control'>
                    Already have an account? <Link to="/login">Sign In</Link>
                    </div>
            </div>

        </div>
  )
}

export default NewUser