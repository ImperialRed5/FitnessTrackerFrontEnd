import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api";


//make alert if password is too short
const Register = ({username,setUsername, setPassword, password}) =>{
    
    const handleRegistration = async (e) => {
        e.preventDefault();
        await registerUser(username, password)
        const token = localStorage.getItem('token')
        if (token) {
         console.log('TOKEN', token)
        }
        else {
          console.log('ERROR NO TOKEN')
        }
      }

    
    return(<div>
        <h1>Register</h1>
        <form onSubmit={handleRegistration}> 
            <label> Username:
                <input type="text" name="username"required  value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <br/>
            <label>
                Password: 
                <input type="password" name="password"  value={password}onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <br/>
            <label>
                Re-Enter Password:
                <input type="password" name="password" required />
            </label>
            <br/>
            <button type="submit">Register</button>
        </form> 
        <Link to='/login'>Already Have an Account? Login!</Link>
    </div>)
}

export default Register;